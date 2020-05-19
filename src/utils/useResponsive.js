import { useLayoutEffect, useState } from 'react';

class Responsive {
  constructor(width, sizes) {
    this.width = width;
    this.sizes = sizes;
  }

  getSize() {
    let res = null;

    Object.keys(this.sizes).every(key => {
      res = key;
      if (this.width >= this.sizes[key].min && this.width <= this.sizes[key].max) {
        return false;
      }
      return true;
    });
    return res;
  }

  select(data = { other: undefined }) {
    const size = this.getSize();
    return data[size] || data.other;
  }
}

function useResponsive(sizes) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  });

  return new Responsive(width, sizes);
}

export default useResponsive;
