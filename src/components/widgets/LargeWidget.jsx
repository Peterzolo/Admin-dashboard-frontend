import React from "react";
import "./LargeWidget.css";

const LargeWidget = () => {
  const Button = ({ type }) => {
    return <button className={"largeWidgetButtton " + type}>{type}</button>;
  };

  

  return (
    <div className="largeWidget">
      <h3 className="largeWidgetTitle">Latest Trends</h3>
      <table className="largeWidgetTable">
        <tr className="largeWidgetTr">
          <th className="largeWidgetTh">Customer</th>
          <th className="largeWidgetTh">Date</th>
          <th className="largeWidgetTh">Amount</th>
          <th className="largeWidgetTh">Status</th>
        </tr>

        <tr className="largeWidgetTr">
          <td className="largeWidgetUser">
            <img
              src="https://picsum.photos/200"
              alt=""
              className="largeWidgetImage"
            />
            <span className="largeWidgetname">Joe Phill</span>
          </td>

          <td className="largeWidgetDate">5 october 2021</td>
          <td className="largeWidgetAmount">$220.00</td>
          <td className="largeWidgetStatus">
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="largeWidgetTr">
          <td className="largeWidgetUser">
            <img
              src="https://picsum.photos/200"
              alt=""
              className="largeWidgetImage"
            />
            <span className="largeWidgetname">Joe Phill</span>
          </td>

          <td className="largeWidgetDate">5 october 2021</td>
          <td className="largeWidgetAmount">$220.00</td>
          <td className="largeWidgetStatus">
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="largeWidgetTr">
          <td className="largeWidgetUser">
            <img
              src="https://picsum.photos/200"
              alt=""
              className="largeWidgetImage"
            />
            <span className="largeWidgetname">Joe Phill</span>
          </td>

          <td className="largeWidgetDate">5 october 2021</td>
          <td className="largeWidgetAmount">$220.00</td>
          <td className="largeWidgetStatus">
            <Button type="Declined" />
          </td>
        </tr>

        <tr className="largeWidgetTr">
          <td className="largeWidgetUser">
            <img
              src="https://picsum.photos/200"
              alt=""
              className="largeWidgetImage"
            />
            <span className="largeWidgetname">Joe Phill</span>
          </td>

          <td className="largeWidgetDate">5 october 2021</td>
          <td className="largeWidgetAmount">$220.00</td>
          <td className="largeWidgetStatus">
            <Button type="Pending" />
          </td>
        </tr>

        <tr className="largeWidgetTr">
          <td className="largeWidgetUser">
            <img
              src="https://picsum.photos/200"
              alt=""
              className="largeWidgetImage"
            />
            <span className="largeWidgetname">Joe Phill</span>
          </td>

          <td className="largeWidgetDate">5 october 2021</td>
          <td className="largeWidgetAmount">$220.00</td>
          <td className="largeWidgetStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default LargeWidget;
