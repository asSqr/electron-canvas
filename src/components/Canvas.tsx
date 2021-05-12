import React, { useState, useEffect } from 'react';
import render from '../core/render';
import log from 'electron-log';

type State = {
  width: number;
  height: number;
  animationId: number | null;
};

const Canvas: React.FC = () => {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);

  const [state, setState] = useState<State>({
    width: window.innerWidth,
    height: window.innerHeight,
    animationId: null,
  });

  const handleResize = () => {
    setState({
      ...state,
      width: window.innerWidth,
      height: window.innerHeight,
    });

    initCanvas();

    log.info(state);
  };

  useEffect(() => {
    log.info('test');

    window.addEventListener('resize', handleResize);

    initCanvas();

    return window.removeEventListener('resize', handleResize);
  }, []);

  const initCanvas = () => {
    if (canvas === null) return;

    const ctx = canvas.getContext('2d');

    if (state.animationId !== null) {
      cancelAnimationFrame(state.animationId);
    }

    if (ctx !== null) renderCanvas(ctx);
  };

  const renderCanvas = (ctx: CanvasRenderingContext2D) => {
    state.animationId = requestAnimationFrame(() => {
      renderCanvas(ctx);
    });

    render(ctx);
  };

  const styles = {
    height: state.height,
  };

  return (
    <div className="main" style={styles}>
      <canvas
        ref={self => setCanvas(self)}
        width={state.width}
        height={state.height}></canvas>
    </div>
  );
};

export default Canvas;
