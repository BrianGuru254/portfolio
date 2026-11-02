import { useState } from "react"

import AeroShards from "~/components/AeroShards"

export default function Home() {
  const [gpuError, setGpuError] = useState<Error | null>(null)

  return (
    <main className="min-h-svh bg-[#080611]">
      <div className="relative h-[600px] w-full">
        <AeroShards
          accentColor="#A855F7"
          backgroundColor="transparent"
          count={1300}
          depthOfField={0.75}
          holdToGather
          markers="plus"
          material="glass"
          mouseInteraction
          onError={setGpuError}
          placement="full"
          pulseOnClick
          shardColor="#896ABD"
          style={{ height: "100%", width: "100%" }}
          vignette={0.3}
        />
        {gpuError && (
          <p
            className="absolute inset-x-4 bottom-4 rounded-md bg-black/70 p-3 text-sm text-amber-200"
            role="status"
          >
            WebGPU could not start: {gpuError.message}
          </p>
        )}
      </div>
    </main>
  )
}
