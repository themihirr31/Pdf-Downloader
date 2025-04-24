import React from "react";
import "./Invoice.css";
import html2pdf from "html2pdf.js";

const Invoice = () => {
  const downloadPDF = () => {
    const downloadBtn = document.getElementById("download-btn");
    downloadBtn.style.display = "none";

    const invoice = document.getElementById("invoice");

    // Create a clone to apply desktop style
    const clone = invoice.cloneNode(true);
    clone.style.width = "794px"; // A4 width in pixels at 96dpi
    clone.style.padding = "20px";
    clone.style.boxSizing = "border-box";
    clone.style.background = "#fff";

    const wrapper = document.createElement("div");
    wrapper.appendChild(clone);
    document.body.appendChild(wrapper);

    html2pdf()
      .from(clone)
      .set({
        margin: 0,
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
        document.body.removeChild(wrapper); // Clean up the clone
      });
  };

  return (
    <div className="main-content container" id="invoice">
      <div className="invoice">
        {/* Aside Section */}
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ul className="contact-list">
              <li>+1 (535) 899-9278</li>
              <li>+1 (656) 355-8302</li>
            </ul>
            <ul className="contact-list">
              <li>maisonette@company.co</li>
              <li>maisonette@support.co</li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
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
                  <td>
                    Web design (Etiam sagittis metus sit amet mauris gravida
                    hendrerit)
                  </td>
                  <td>60</td>
                  <td>$4,200.00</td>
                </tr>
                <tr>
                  <td>
                    Responsive design (Etiam sagittis metus sit amet mauris
                    gravida hendrerit)
                  </td>
                  <td>10</td>
                  <td>$1,500.00</td>
                </tr>
                <tr>
                  <td>
                    Logo design (Cras faucibus tincidunt elit id rhoncus.)
                  </td>
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

          <div className="invoice-message">
            <h2>Thank you for contacting us!</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              quis massa nisl. Sed fringilla turpis id mi ultrices, et faucibus
              ipsum aliquam.
            </p>
          </div>

          <footer className="invoice-footer">
            <button className="btn btn-secondary">Save PDF</button>
            <button className="btn btn-secondary">Print</button>
            <button className="btn btn-primary">Pay now</button>
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
