import { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', style, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const combinedStyle = delay ? { ...style, transitionDelay: `${delay}ms` } : style;

  return (
    <Tag ref={ref} className={`${className}${visible ? ' revealed' : ''}`} data-reveal="" style={combinedStyle} {...rest}>
      {children}
    </Tag>
  );
}
