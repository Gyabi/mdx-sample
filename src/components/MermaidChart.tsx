import { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

const MermaidChart = ({ chart }: { chart: string }) => {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chartRef.current) {
      mermaid.init(undefined, chartRef.current)
    }
  }, [chart])

  return <div ref={chartRef} className="mermaid">{chart}</div>
}

export default MermaidChart
