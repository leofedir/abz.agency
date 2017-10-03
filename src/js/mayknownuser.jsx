let TrimStringWithDot = function (str, lenstr) {
    const dot3='...';
    var result=str;
    if (str.length>lenstr && str.length>3) {
        result = str.substring(0,lenstr-1-3);
        result = result + dot3;
    }
    return result;
}

let ShowDataFriend = React.createClass ({
    render : function () {
        var name = this.props.name,
            job = this.props.job,
            practice = this.props.practice,
            occupate = this.props.occupate,
            photo = this.props.photo;
        return (
            <div className="content-user-program-friend">
                <p className="content-user-program-font-name">{ name }</p>
                <div className="content-user-program-friend-details">
                    <img src={ photo } className="content-user-program-friend-details-image" />
                        <div className="content-user-program-friend-details-text">
                            <p className="content-user-program-font-description">{ job } ({practice})</p>
                            <p className="content-user-program-font-occupate">{ occupate }</p>
                            <a href="#" className="content-user-program-font-add-friend">Add Friend</a>
                        </div>
                </div>
            </div>
        )
  }
});

let ShowProductName = React.createClass ({
    render : function () {
        var productname = this.props.productname,
            description = TrimStringWithDot(this.props.description,55),
            photo = this.props.photo;
        return (
            <div className="content-user-program-friend">
                <p className="content-user-program-font-name">{ productname }</p>
                <div className="content-user-program-program-details">
                    <img src={ photo } className="content-user-program-friend-details-image" />
                    <div className="content-user-program-friend-details-text">
                        <p className="content-user-program-font-description">{ description }</p>
                    </div>
                </div>
            </div>
        )

    }
});

let ShowCompany = React.createClass ({
    render : function () {
        var company = this.props.company,
            typecompany = this.props.typecompany,
            occupate = this.props.occupate,
            photo = this.props.photo;
        return (
            <div className="content-menu-company">
                <div className="content-user-program-friend-details">
                    <img src={ photo } className="content-user-program-friend-details-image" style={{marginTop: 2}}/>
                    <div className="content-menu-company-details-text">
                        <p className="content-user-program-font-name">{ company }</p>
                        <p className="content-menu-program-font-description" style={{marginTop: 2}}>{ typecompany }</p>
                        <p className="content-menu-program-font-description" style={{marginTop: 1}}>{ occupate }</p>
                        <a href="#" className="content-user-program-font-add-friend">Follow Now</a>
                    </div>
                </div>
            </div>
        )

    }
});

let ListFriends = React.createClass({
     render : function() {
         return (
            <div>
                <div className="content-user-program-friend-header">
                    <p className="content-user-program-font-header-name">People you may know</p>
                    <a href="#" className="content-user-program-font-see-all">See All</a>
                </div>
                { this.props.ArrayFriend.map ( function( item, index ) {
                    return <ShowDataFriend
                        key={ index }
                        name={ item.name }
                        job={ item.job }
                        practice={ item.practice }
                        occupate={ item.occupate }
                        photo={ item.image }
                        />
                })}
            </div>
         );
    }
});

let ListProductNames = React.createClass({
    render : function() {
        return (
            <div>
                <div className="content-user-program-friend-header">
                    <p className="content-user-program-font-header-name">Featured Products</p>
                    <a href="#" className="content-user-program-font-see-all">See All</a>
                </div>
                { this.props.ArrayProductName.map ( function( item, index ) {
                    return <ShowProductName
                        key={ index }
                        productname = { item.productname }
                        description= { item.description }
                        photo={ item.image }
                    />
                })}
            </div>
        );
    }
});

let ListCompanies = React.createClass({
    render : function() {
        return (
            <div>
                <div className="content-user-program-friend-header-left">
                    <p className="content-user-program-font-header-name">Featured Companies</p>
                    <a href="#" className="content-user-program-font-see-all">See All</a>
                </div>
                { this.props.ArrayCompanies.map ( function( item, index ) {
                    return <ShowCompany
                        key={ index }
                        company = { item.company }
                        typecompany={ item.typecompany }
                        occupate={ item.occupate }
                        photo={ item.image }
                    />
                })}
            </div>
        );
    }
});

const ArrayFriendText = [
    {
        id: 1,
        name: "Dennis Adams",
        job: "Dentist",
        practice: "Practice Owner",
        occupate: "London, England",
        image: "images/content/friends/DennisAdams.png"
    },
    {
        id: 2,
        name: "Mary Carpenter",
        job: "Dentist",
        practice: "Practice Owner",
        occupate: "Belgrade, Serbia",
        image: "images/content/friends/MaryCarpenter.png"
    },
    {
        id: 3,
        name: "Danielle Salazar",
        job: "Dentist",
        practice: "Practice Owner",
        occupate: "Paris, France",
        image: "images/content/friends/DanielleSalazar.png"
    }
];

const ArrayProductNameText = [
    {
        id: 1,
        productname: "Product Name 1",
        description: "Product Short Description.The quick brown fox jumps over the lazy dog. WWWWWWWWWWWWWWWWWWWWWW",
        image: "images/content/product/product1.jpg"
    },
    {
        id: 2,
        productname: "Product Name 2",
        description: "Product Short Description.The quick brown fox jumps over the lazy dog. WWWWWWWWWWWWWWWWWWWWWW",
        image: "images/content/product/product2.jpg"
    },
];

const ArrayCompaniesText = [
    {
        id: 1,
        company: "Company Name",
        typecompany: "Manufacturer",
        occupate: "Belgrade, Serbia",
        image: "images/content/companies/company1.jpg"
    },
    {
        id: 2,
        company: "Company Name",
        typecompany: "Service Provider",
        occupate: "New York, USA",
        image: "images/content/companies/company2.jpg"
    },
    {
        id: 3,
        company: "Company Name",
        typecompany: "Supplier",
        occupate: "London, England",
        image: "images/content/companies/company3.jpg"
    },
];


ReactDOM.render(<ListFriends ArrayFriend = { ArrayFriendText } />, document.getElementById('id-content-user-program'));
ReactDOM.render(<ListProductNames ArrayProductName = { ArrayProductNameText } />, document.getElementById('id-content-user-program-product'));
ReactDOM.render(<ListCompanies ArrayCompanies = { ArrayCompaniesText } />, document.getElementById('id-content-company'));


