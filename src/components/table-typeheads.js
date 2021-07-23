import React, {Suspense} from "react";
import "./css/table-typeheads.css";
const Lazytypeheads = React.lazy(() => import('./typeheads'));

const TableTypeheads = () => {
  return (
    <div className="container">
      <Suspense fallback={
        <div className="flex-container">
          <div className="flex-item pulse-loading">
            <h2>Loading Data Please Wait...</h2>
          </div>
        </div>
      }>
        <Lazytypeheads></Lazytypeheads>
      </Suspense>
    </div>
  );
};

export default TableTypeheads;
