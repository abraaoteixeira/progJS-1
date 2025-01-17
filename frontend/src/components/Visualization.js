import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import axios from 'axios';

function Visualization({ text }) {
  const svgRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('/process-text', { text });
        const data = response.data;

        const svg = d3.select(svgRef.current)
          .attr('width', 800)
          .attr('height', 600);

        // Clear previous visualizations
        svg.selectAll('*').remove();

        // Example visualization: OSI Model Diagram
        const layers = [
          'Physical',
          'Data Link',
          'Network',
          'Transport',
          'Session',
          'Presentation',
          'Application'
        ];

        const layerHeight = 600 / layers.length;

        svg.selectAll('rect')
          .data(layers)
          .enter()
          .append('rect')
          .attr('x', 50)
          .attr('y', (d, i) => i * layerHeight)
          .attr('width', 700)
          .attr('height', layerHeight - 10)
          .attr('fill', 'lightblue');

        svg.selectAll('text')
          .data(layers)
          .enter()
          .append('text')
          .attr('x', 400)
          .attr('y', (d, i) => i * layerHeight + layerHeight / 2)
          .attr('text-anchor', 'middle')
          .attr('alignment-baseline', 'middle')
          .text(d => d);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [text]);

  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default Visualization;
