import React from 'react';


const Spans: React.FC = () => {
  const spans = Array(30).fill("1")
  return (
    <>
      {
        spans.map((span: any, index: number) => {
          return <span className="roundCircle__span" key={index}></span>
        })
      }
    </>
  );
}
export default Spans;