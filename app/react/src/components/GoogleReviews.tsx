import { useEffect } from "react";

export default function GoogleReviews() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="container my-5">
      <h3 className="text-center mb-4">Review Pelanggan</h3>
      <div
        className="elfsight-app-d588e1bd-37d1-4e20-b815-7a902c6e9647"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
}
