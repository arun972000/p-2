import React from "react";


const Chart = ({ width, children,title }) => {
    return (<div className={`${width} mb-4`}>
        <div class="card">
            <div class="card-header py-3 text-primary">
                <b>{title}</b>
            </div>
            <div className="card-body p-3">
                {children}
            </div>
        </div>
    </div>)
}

export default Chart;