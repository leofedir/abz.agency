// let ShowDataServicesDirectoryXY = React.createClass ({
//     render : function () {
//         var XX = this.props.X,
//             YY = this.props.Y,
//             CoordinateBackGroundPosition = XX+'px '+YY+'px';
//         return (
//             <div  className="content-space-menu-block">
//                 <a href="#">
//                         <div  className="content-space-menu-image" style={{backgroundPosition: CoordinateBackGroundPosition}}>
//                         </div>
//                         <div className="content-space-menu-text-block"><p>{this.props.Text}</p></div>
//                 </a>
//             </div>
//         )
//
//   }
// });
//
//
//
// let ServicesDirectoryXY = React.createClass({
//      render : function() {
//         const
//             RowCoordinates=[-1, -205, -427, -631, -853],
//             ColumsInImage=5,
//             ImageColShift = -177,
//             StartX = -1;
//         var ArrayServices = [],
//             WorkX = StartX,
//             WorkRow = 0,
//             WorkColumn = 0;
//          for (var i=0; i < this.props.ArrayServicesText.length; i++) {
//              ArrayServices.push({id: i, text: this.props.ArrayServicesText[i], X: WorkX, Y:RowCoordinates[WorkRow]});
//              if (((i+1)/ColumsInImage)==Math.round((i+1)/ColumsInImage)) {
//                  WorkColumn = 0;
//                  WorkRow = WorkRow + 1;
//                  WorkX = StartX + (ImageColShift * (WorkColumn));
//              } else {
//                  WorkX = StartX + (ImageColShift * (WorkColumn+1));
//                  WorkColumn = WorkColumn + 1;
//              };
//          }
//          return (
//             <div>
//                 { ArrayServices.map( function( item, index ) {
//                     return <ShowDataServicesDirectoryXY
//                         key={index}
//                         X= {item.X}
//                         Y= {item.Y}
//                         Text={item.text}
//                         />
//                 })}
//             </div>
//          );
//     }
// });


let ShowDataServicesDirectory = React.createClass ({
    render : function () {
        return (
            <div  className="content-space-menu-block">
                <a href="#">
                        <img src={ this.props.image } className="content-space-menu-image-JSON" />
                        <div className="content-space-menu-text-block"><p>{ this.props.title }</p></div>
                </a>
            </div>
        )

  }
});

let ShowError = React.createClass ({
    render : function () {
        return (
            <div  className="content-space-menu-block">
                <p>Error Receiving Data</p>
            </div>
        )
     }
});


let ShowModalError = React.createClass ({
    handleClick : function (e) {
        e.preventDefault();
        document.getElementById('myModal').style.display = 'none';
    },
    render : function () {
        return (
            <div id="myModal" className="modal" style={{display:'block'}}>
                <div className="modal-content">
                    <span className="close" onClick={this.handleClick}>&times;</span>
                    <p>Looks like there was a problem.</p>
                    <p>Status Code: { this.props.ErrorMessage }</p>
                </div>
            </div>
        )
    }
});



// let ServicesDirectory = React.createClass({
//      render : function() {
//          var ArrayServices = [],
//              ArrayAll = JSON.parse(this.props.ArrayServicesText),
//              ArrayCut = ArrayAll.data;
//          console.log(ArrayCut);
//
//          // for (var i=0; i < ArrayCut.length; i++) {
//          //     ArrayServices.push({id: ArrayCut[i].id, text: ArrayCut[i].title, X: WorkX, Y:RowCoordinates[WorkRow]});
//          // }
//          return (
//             <div>
//                 { ArrayCut.map( function( item, index ) {
//                     return <ShowDataServicesDirectory
//                         key={ item.id }
//                         title = { item.title }
//                         image = { 'http:' + item.icon }
//                         />
//                 })}
//             </div>
//          );
//     }
// });

// function RetriveDataFromServer(UrlOfCategories) {
//     var answer:
//     fetch(UrlOfCategories)
//     .then(
//         function(response) {
//             if (response.status !== 200) {
//                 console.log('Looks like there was a problem. Status Code: ' +
//                     response.status);
//                 return;
//             }
//
//             // Examine the text in the response
//             response.json().then(function(data) {
//                 console.log(data);
//             });
//         }
//     )
//     .catch(function(err) {
//         console.log('Fetch Error :-S', err);
//     });
// }

let ServicesDirectory = React.createClass({
    getInitialState : function () {
        return {templ : (<div>LOADING</div>) };
    },
    
    setTempl : function (str) {
        this.setState( { templ: str } );
    },

    componentDidMount: function(){
        const urlfetch='http://504080.com/api/v1/services/categories';
        let ArrayServices = [],
            ArrayAll,
            ArrayCut,
            ErrorMessage;
        var self = this;
        var templ2=(<div>LOADING</div>);
        fetch(urlfetch, {mode: 'cors'})
            .then(
                function(response) {
                    if (response.status !== 200) {
                        templ2 = (
                                <div>
                                    <ShowError/>
                                    <ShowModalError ErrorMessage={ response.status }/>
                                </div>
                        );
                        self.setTempl(templ2);
                        return;
                    }
                    response.json().then(function(data) {
                        console.log(data);
                        ArrayAll = data;
                        ArrayCut = ArrayAll.data;
                        templ2 = (
                            <div>
                                { ArrayCut.map( function( item, index ) {
                                    return <ShowDataServicesDirectory
                                        key={ item.id }
                                        title = { item.title }
                                        image = { 'http:' + item.icon }
                                        />
                                })}
                            </div>
                        );
                        self.setTempl(templ2);
                    });
                }
            )
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            })
    },
    render: function () {
        return this.state.templ;
    }
});



// ReactDOM.render(<ServicesDirectory ArrayServicesText = { Data_TextXY  } />, document.getElementById('id-content-space-menu'));
// ReactDOM.render(<ServicesDirectory ArrayServicesText = { Data_ListService } />, document.getElementById('id-content-space-menu'));
ReactDOM.render(<ServicesDirectory  />, document.getElementById('id-content-space-menu'));

// function RetriveData() {
//     fetch('http://504080.com/api/v1/services/categories')
//         .then(
//             function(response) {
//                 if (response.status !== 200) {
//                     console.log('Looks like there was a problem. Status Code: ' +
//                         response.status);
//                     return;
//                 }
//
//                 // Examine the text in the response
//                 response.json().then(function(data) {
//                     console.log(data);
//                 });
//             }
//         )
//         .catch(function(err) {
//             console.log('Fetch Error :-S', err);
//         });
//
// }


// const Data_TextXY = ["Accountancy", "Associations", "Buy/Sell Dental Practice", "Cleaning Agencies",
//         "Clinical Waste Collection", "Computer Services", "CPR/Basic Life Support Training",
//         "CQC Compliance Service", "Dental Chair Recovery & Uphoistery Services",
//         "Dental Recruitment", "Dental Software", "Electrical Safety & Testing",
//         "Equipment Engineering", "Equipment Engineering Services", "Finance", "Insurance",
//         "Legionalla Management Services", "Marketing", "Others", "Repairs", "Selling Gold", "Solicitors",
//         "Surgery Design", "Training & Courses", "Uniform & Workwear"
// ];


const Data_ListService = '{ \
    "success": true,\
    "data": [\
        {\
            "id": "1",\
            "icon": "//504080.com/uploads/service_categories/46bd8ac9fd62bbc57199ea1f2c4a58aa97934ebc.png",\
            "title": "Accountancy",\
            "count": 68\
        },\
        {\
            "id": "2",\
            "icon": "//504080.com/development/service-directories/associations.png",\
            "title": "Associations",\
            "count": 15\
        },\
        {\
            "id": "3",\
            "icon": "//504080.com/img/no-service-category-icon.png",\
            "title": "Buy sell dental practice",\
            "count": 4\
        },\
        {\
            "id": "36",\
            "icon": "//504080.com/img/no-service-category-icon.png",\
            "title": "BUY/SELL Dental Practice",\
            "count": 6\
        },\
        {\
            "id": "4",\
            "icon": "//504080.com/development/service-directories/cleaning-agencies.png",\
            "title": "Cleaning agencies",\
            "count": 51\
        },\
        {\
            "id": "5",\
            "icon": "//504080.com/img/no-service-category-icon.png",\
            "title": "Clinical waste",\
            "count": 21\
        },\
        {\
            "id": "29",\
            "icon": "//504080.com/img/no-service-category-icon.png",\
            "title": "Clinical Waste Collection",\
            "count": 6\
        },\
        {\
            "id": "6",\
            "icon": "//504080.com/img/no-service-category-icon.png",\
            "title": "Computer service",\
            "count": 4\
        },\
        {\
            "id": "31",\
            "icon": "//504080.com/img/no-service-category-icon.png",\
            "title": "Computer services ",\
            "count": 5\
        },\
        {\
            "id": "7",\
            "icon": "//504080.com/img/no-service-category-icon.png",\
            "title": "Cpr basic",\
            "count": 2\
        },\
        {\
            "id": "34",\
            "icon": "//504080.com/img/no-service-category-icon.png",\
            "title": "CPR/Basic Life Support Training",\
            "count": 2\
        },\
        {\
            "id": "27",\
            "icon": "//504080.com/img/no-service-category-icon.png",\
            "title": "CQC Compliance Service",\
            "count": 1\
        },\
        {\
            "id": "8",\
            "icon": "//504080.com/img/no-service-category-icon.png",\
            "title": "Dental chair recovery",\
            "count": 4\
        },\
        {\
            "id": "26",\
            "icon": "//504080.com/img/no-service-category-icon.png",\
            "title": "Dental Chair Recovery & Upholstery Services",\
            "count": 3\
        },\
        {\
            "id": "9",\
            "icon": "//504080.com/development/service-directories/dental-recruitment.png",\
            "title": "Dental recruitment",\
            "count": 19\
        },\
        {\
            "id": "10",\
            "icon": "//504080.com/development/service-directories/dental-software.png",\
            "title": "Dental software",\
            "count": 10\
        },\
        {\
            "id": "11",\
            "icon": "//504080.com/development/service-directories/electrical-safety.png",\
            "title": "Electrical safety",\
            "count": 1\
        },\
        {\
            "id": "37",\
            "icon": "//504080.com/img/no-service-category-icon.png",\
            "title": "Electrical Safety and Testing",\
            "count": 2\
        },\
        {\
            "id": "35",\
            "icon": "//504080.com/img/no-service-category-icon.png",\
            "title": "Equipment Engineering Services",\
            "count": 15\
        },\
        {\
            "id": "12",\
            "icon": "//504080.com/development/service-directories/equipment-engineering.png",\
            "title": "Equipment-engineering",\
            "count": 4\
        },\
        {\
            "id": "30",\
            "icon": "//504080.com/img/no-service-category-icon.png",\
            "title": "Finance",\
            "count": 6\
        },\
        {\
            "id": "28",\
            "icon": "//504080.com/img/no-service-category-icon.png",\
            "title": "Insurance",\
            "count": 4\
        },\
        {\
            "id": "33",\
            "icon": "//504080.com/img/no-service-category-icon.png",\
            "title": "Legionella Management Services",\
            "count": 7\
        },\
        {\
            "id": "13",\
            "icon": "//504080.com/development/service-directories/marketing.png",\
            "title": "Marketing",\
            "count": 17\
        },\
        {\
            "id": "14",\
            "icon": "//504080.com/development/service-directories/others.png",\
            "title": "Others",\
            "count": 14\
        },\
        {\
            "id": "15",\
            "icon": "//504080.com/development/service-directories/repairs.png",\
            "title": "Repairs",\
            "count": 10\
        },\
        {\
            "id": "16",\
            "icon": "//504080.com/development/service-directories/selling-gold.png",\
            "title": "Selling gold",\
            "count": 32\
        },\
        {\
            "id": "17",\
            "icon": "//504080.com/development/service-directories/solicitors.png",\
            "title": "Solicitors",\
            "count": 40\
        },\
        {\
            "id": "18",\
            "icon": "//504080.com/development/service-directories/surgery-design.png",\
            "title": "Surgery design",\
            "count": 16\
        },\
        {\
            "id": "32",\
            "icon": "//504080.com/img/no-service-category-icon.png",\
            "title": "Training & courses",\
            "count": 7\
        },\
        {\
            "id": "19",\
            "icon": "//504080.com/development/service-directories/training-and-courses.png",\
            "title": "Training and courses",\
            "count": 3\
        },\
        {\
            "id": "38",\
            "icon": "//504080.com/img/no-service-category-icon.png",\
            "title": "Uniform & Workwear",\
            "count": 2\
        },\
        {\
            "id": "20",\
            "icon": "//504080.com/development/service-directories/uniform-and-workwear.png",\
            "title": "Uniform and workwear",\
            "count": 0\
        },\
        {\
            "id": "21",\
            "icon": "//504080.com/development/service-directories/web-designers.png",\
            "title": "Web designers",\
            "count": 11\
        }\
    ]\
}';
