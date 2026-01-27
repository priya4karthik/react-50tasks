import { useState } from 'react';

export default function Task23() {
  const [file, setFile] = useState(null);

  return (
    <div style={{ textAlign: 'center', border: '2px dashed #e2e8f0', padding: '30px', borderRadius: '12px' }}>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} id="fileInput" hidden />
      <label htmlFor="fileInput" className="btn btn-primary" style={{ cursor: 'pointer' }}>Choose File</label>
      {file && (
        <div style={{ marginTop: '20px' }}>
          <p>{file.name}</p>
          {file.type.startsWith('image/') && <img src={URL.createObjectURL(file)} alt="preview" style={{ width: '100px', borderRadius: '8px' }} />}
        </div>
      )}
    </div>
  );
}