let ShowDataServicesDirectory = React.createClass ({
    render : function () {
        var XX = this.props.X,
            YY = this.props.Y,
            CoordinateBackGroundPosition = XX+'px '+YY+'px';
        return (
            <div  className="content-space-menu-block">
                <a href="#">
                        <div  className="content-space-menu-image" style={{backgroundPosition: CoordinateBackGroundPosition}}>
                        </div>
                        <div className="content-space-menu-text-block"><p>{this.props.Text}</p></div>
                </a>
            </div>
        )

  }
});


let ServicesDirectory = React.createClass({
     render : function() {
        const
            RowCoordinates=[-1, -205, -427, -631, -853],
            ColumsInImage=5,
            ImageColShift = -177,
            StartX = -1;
        var ArrayServices = [],
            WorkX = StartX,
            WorkRow = 0,
            WorkColumn = 0;
         for (var i=0; i < this.props.ArrayServicesText.length; i++) {
             ArrayServices.push({id: i, text: this.props.ArrayServicesText[i], X: WorkX, Y:RowCoordinates[WorkRow]});
             if (((i+1)/ColumsInImage)==Math.round((i+1)/ColumsInImage)) {
                 WorkColumn = 0;
                 WorkRow = WorkRow + 1;
                 WorkX = StartX + (ImageColShift * (WorkColumn));
             } else {
                 WorkX = StartX + (ImageColShift * (WorkColumn+1));
                 WorkColumn = WorkColumn + 1;
             };
         }
         return (
            <div>
                { ArrayServices.map( function( item, index ) {
                    return <ShowDataServicesDirectory
                        key={index}
                        X= {item.X}
                        Y= {item.Y}
                        Text={item.text}
                        />
                })}
            </div>
         );
    }
});

const Data_Text = ["Accountancy", "Associations", "Buy/Sell Dental Practice", "Cleaning Agencies",
        "Clinical Waste Collection", "Computer Services", "CPR/Basic Life Support Training",
        "CQC Compliance Service", "Dental Chair Recovery & Uphoistery Services",
        "Dental Recruitment", "Dental Software", "Electrical Safety & Testing",
        "Equipment Engineering", "Equipment Engineering Services", "Finance", "Insurance",
        "Legionalla Management Services", "Marketing", "Others", "Repairs", "Selling Gold", "Solicitors",
        "Surgery Design", "Training & Courses", "Uniform & Workwear"
];

ReactDOM.render(<ServicesDirectory ArrayServicesText = { Data_Text } />, document.getElementById('id-content-space-menu'));

