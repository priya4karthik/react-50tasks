const Card = ({ name, price }) => (
  <div style={{ border: '1px solid #eee', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
    <h4>{name}</h4>
    <p style={{ color: '#2563eb' }}>${price}</p>
    <button className="btn btn-primary">Buy Now</button>
  </div>
);

export default function Task44() {
  return <Card name="Luxury Watch" price="299" />;
}