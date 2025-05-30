import React from "react";
import "./Invoice.css";
import html2pdf from "html2pdf.js";

const Invoice = () => {
  const downloadPDF = () => {
    const downloadBtn = document.getElementById("download-btn");
    downloadBtn.style.display = "none";

    const element = document.getElementById("invoice");

    html2pdf()
      .from(element)
      .set({
        margin: [10, 10, 10, 10],
        filename: "invoice.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
        },
      })
      .save()
      .then(() => {
        downloadBtn.style.display = "inline-block";
      });
  };

  return (
    <div className="main-content container" id="invoice">
      <div className="invoice">
        <aside className="invoice-aside">
          <div className="invoice-logo" />
          <div className="invoice-person">
            <span className="name">Kristopher Donny</span>
            <span className="position">Developer and Designer</span>
            <span>donny@designer.co</span>
            <span>661 Bubby Street</span>
            <span>United States</span>
          </div>
          <div className="invoice-divider" />
          <div className="invoice-person">
            <span className="name">Elliot Mark</span>
            <span className="position">CEO at BLX</span>
            <span>ceoblx@company.co</span>
            <span>839 Owagner Drive</span>
            <span>United States</span>
          </div>
          <div className="invoice-company-info">
            <span className="title">Maisonette Company</span>
            <p>Contact: +1 (535) 899-9278</p>
            <p>Email: maisonette@company.co</p>
          </div>
        </aside>

        <section className="invoice-content">
          <header className="invoice-header">
            <div className="invoice-title">Invoice</div>
            <div className="invoice-order">
              <div>
                Number <strong>2308</strong>
              </div>
              <div>
                Date <strong>August 23, 2018</strong>
              </div>
            </div>
          </header>

          <div className="table-responsive">
            <table className="invoice-details">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Hours</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Web design</td>
                  <td>60</td>
                  <td>$4,200.00</td>
                </tr>
                <tr>
                  <td>Responsive design</td>
                  <td>10</td>
                  <td>$1,500.00</td>
                </tr>
                <tr>
                  <td>Logo design</td>
                  <td>12</td>
                  <td>$1,700.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="table-responsive">
            <table className="invoice-summary">
              <thead>
                <tr>
                  <th>Subtotal</th>
                  <th>Discount (20%)</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>$7,400.00</td>
                  <td>$1,480.00</td>
                  <td>
                    <strong>$5,920.00</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="invoice-payment-details">
            <p>
              <strong>Payment Method:</strong> Credit card
            </p>
            <p>
              <strong>Card type:</strong> Mastercard
            </p>
            <p>
              <strong>Verification #:</strong> 4256 9813 87
            </p>
          </div>

          <p style={{ textAlign: "center", fontSize: "0.9rem" }}>
            Thank you for your business!
          </p>

          <footer className="invoice-footer">
            <button
              id="download-btn"
              className="btn btn-success"
              onClick={downloadPDF}
            >
              Download PDF
            </button>
          </footer>
        </section>
      </div>
    </div>
  );
};

export default Invoice;
