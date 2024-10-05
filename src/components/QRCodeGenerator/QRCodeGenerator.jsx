import QRCode from "react-qr-code";
import { Button } from "../ui/button";
import { useRef, useState } from "react";

export default function QRCodeGenerator() {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");
  const qrRef = useRef(null);

  function handleGenerateCode() {
    setQrCode(input);
  }

  function handleSaveQRCode() {
    if (qrRef.current) {
        const svg = qrRef.current.querySelector("svg");
        const svgData = new XMLSerializer().serializeToString(svg);
        const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
        const svgUrl = URL.createObjectURL(svgBlob);
        
        const downloadLink = document.createElement("a");
        downloadLink.href = svgUrl;
        downloadLink.download = "qrcode.svg";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(svgUrl);
      }
  }

  return (
    <div className="grid grid-cols-1 gap-10 place-content-start justify-items-center mx-auto p-10 w-screen h-screen">
      <h2 className="text-2xl font-medium tracking-widest">QR CODE GENERATOR</h2>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Enter text here"
        className="block w-60 text-center rounded-md py-2 px-3 tracking-widest border-0 text-gray-900 ring-1 ring-inset ring-gray-300"
      />
      <Button
        disabled={input && input.trim !== 0 ? false : true}
        onClick={handleGenerateCode}
      >
        Generate
      </Button>

      <div className="flex justify-center" ref={qrRef}>
        {qrCode && <QRCode value={qrCode} className="card-primary w-11/12 md:w-96 h-auto md:h-96 p-10" />}
      </div>
      <Button onClick={handleSaveQRCode}>Save QRCode</Button>
    </div>
  );
}
