function Card({ children, style }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'rgb(28, 44, 53);',
        flexDirection: 'row',
        borderRadius: '15px',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default Card;
