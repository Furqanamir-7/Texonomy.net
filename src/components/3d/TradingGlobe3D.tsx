import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { GLOBE_MARKERS, type GlobeMarker } from "@/data/trades/globe-markers";
import { useDevice } from "@/hooks/useDevice";

const GLOBE_RADIUS = 2.2;

function latLngToVector3(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

function WireframeGlobe() {
  const groupRef = useRef<THREE.Group>(null);
  const { isMobile } = useDevice();

  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(GLOBE_RADIUS, isMobile ? 2 : 3);
    return geo;
  }, [isMobile]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh geometry={geometry}>
        <meshBasicMaterial color="#00b4d8" wireframe transparent opacity={0.22} />
      </mesh>
      <mesh geometry={geometry}>
        <meshBasicMaterial color="#00b4d8" wireframe transparent opacity={0.08} side={THREE.BackSide} />
      </mesh>
      {/* Equator ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[GLOBE_RADIUS * 1.02, 0.008, 8, 128]} />
        <meshBasicMaterial color="#00b4d8" transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

function MarkerDot({
  marker,
  active,
  onSelect,
}: {
  marker: GlobeMarker;
  active: boolean;
  onSelect: (m: GlobeMarker) => void;
}) {
  const pos = useMemo(() => latLngToVector3(marker.lat, marker.lng, GLOBE_RADIUS * 1.02), [marker]);
  const color =
    marker.role === "supplier" ? "#00b4d8" : marker.role === "customer" ? "#6b7b8c" : "#00e5ff";

  return (
    <group position={pos}>
      <mesh
        onClick={(e) => {
          e.stopPropagation();
          onSelect(marker);
        }}
        onPointerOver={() => (document.body.style.cursor = "pointer")}
        onPointerOut={() => (document.body.style.cursor = "auto")}
      >
        <sphereGeometry args={[active ? 0.07 : 0.05, 12, 12]} />
        <meshBasicMaterial color={color} transparent opacity={active ? 1 : 0.85} />
      </mesh>
      {active && (
        <mesh>
          <sphereGeometry args={[0.12, 12, 12]} />
          <meshBasicMaterial color={color} transparent opacity={0.2} />
        </mesh>
      )}
      <Html
        position={[0, 0.18, 0]}
        center
        distanceFactor={6}
        style={{ pointerEvents: "none", userSelect: "none" }}
      >
        <div
          className={`px-2 py-0.5 rounded text-[9px] font-semibold uppercase tracking-wider whitespace-nowrap border ${
            active
              ? "bg-accent/20 border-accent/60 text-accent"
              : "bg-bg-elevated/90 border-border/60 text-text-muted"
          }`}
        >
          {marker.name}
        </div>
      </Html>
    </group>
  );
}

function GlobeScene({
  filter,
  activeId,
  onSelect,
}: {
  filter: "all" | "supplier" | "customer";
  activeId: string | null;
  onSelect: (m: GlobeMarker) => void;
}) {
  const visible = GLOBE_MARKERS.filter((m) => {
    if (filter === "all") return true;
    if (filter === "supplier") return m.role === "supplier" || m.role === "both";
    return m.role === "customer" || m.role === "both";
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[6, 4, 6]} intensity={0.6} color="#00b4d8" />
      <WireframeGlobe />
      {visible.map((m) => (
        <MarkerDot key={m.id} marker={m} active={activeId === m.id} onSelect={onSelect} />
      ))}
    </>
  );
}

type TradingGlobe3DProps = {
  filter: "all" | "supplier" | "customer";
  activeId: string | null;
  onSelect: (marker: GlobeMarker) => void;
  className?: string;
};

export function TradingGlobe3D({ filter, activeId, onSelect, className }: TradingGlobe3DProps) {
  const { isMobile, prefersReducedMotion } = useDevice();

  if (prefersReducedMotion) {
    return (
      <div className={`flex items-center justify-center bg-bg-elevated rounded-2xl border border-border ${className}`}>
        <div className="text-center p-8 text-text-muted text-sm">
          <div className="text-4xl mb-2">🌐</div>
          Global supply network across Asia, Europe, and the Americas
        </div>
      </div>
    );
  }

  return (
    <div className={`relative rounded-2xl border border-accent/25 overflow-hidden bg-bg-elevated ${className}`}>
      <div className="absolute inset-0 woven-pattern opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-bg-primary/80 pointer-events-none" />
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        dpr={isMobile ? 1 : 1.5}
        gl={{ alpha: true, antialias: !isMobile }}
        className="!absolute inset-0"
        style={{ pointerEvents: "auto" }}
      >
        <Suspense fallback={null}>
          <GlobeScene filter={filter} activeId={activeId} onSelect={onSelect} />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-3 left-3 right-3 flex gap-3 text-[10px] text-text-muted pointer-events-none">
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-accent" /> Suppliers
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-bronze" /> Customers
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-[#00e5ff]" /> Both
        </span>
      </div>
    </div>
  );
}

export type { GlobeMarker };
