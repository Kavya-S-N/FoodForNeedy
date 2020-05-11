// import React, { Component, Fragment } from "react";
// import logo from "../../assets/logo.png";
// import "../CSS/donor.css";

// class SupplierList extends Component {
//   render() {
//     return (
//       <Fragment>
//         {/* {/* End of Navbar */}

//         {/* <section id="sectionF1">
//           <div className="row container-fluid m-5 ">
//             <div className="col-md-3">
//               <div className="card p-3">
//                 <div class="card text-center">
//                   <img class="card-img-top" src={logo} alt="" /> 
//                   <i className="fa fa-book fa-5x "></i>
//                   <div class="card-body">
//                     <h4 class="card-title">Products</h4>
//                     <p class="card-text">lists</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>  */}

    
// <section class="counts section-bg mt-5">
//         <div className=" container-fluid mt-5" id="product">
//           <h2> List Of Suppliers</h2>

//           <div className="row">
//             <div className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated">
//               <div className="product-top">
//                 <img
//                   src="data:image/png;base64,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"
//                   className="img1"
//                   alt=""
//                 />
//               <div className="product-bottom text-center">
                            
//                             <h3>Supplier Name</h3>
//                             <h4>Address</h4>
      
//                             <button     type="button"
//                     className="btn btn-secondary"
//                     title="Order"
//                     data-toggle="modal"
//                     data-target="#quickModel">
//                     Request
//                     </button>
//                           </div>
//                 <div className="overlay">
//                   <button
//                     type="button"
//                     className="btn btn-secondary"
//                     title="Order"
//                     data-toggle="modal"
//                     data-target="#quickModel"
//                   >
//                     <i className="fa fa-eye"></i>
//                   </button>

//                   <button
//                     type="button"
//                     className="btn btn-secondary"
//                     title="Add to Cart"
//                     data-toggle=""
//                     data-target=""
//                   >
//                     <i className="fa fa-shopping-cart"></i>
//                   </button>
//                 </div>
//               </div>
//               <div className="product-bottom text-center">
               
               
             
//               </div>
//             </div>
           

//               <div className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated">
//               <div className="product-top">
//                 <img
//                   src="data:image/png;base64,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"
//                   className="img1"
//                   alt=""
//                 />
//                <div className="product-bottom text-center">
                            
//                             <h3>Supplier Name</h3>
//                             <h4>Address</h4>
          
//                             <button     type="button"
//                     className="btn btn-secondary"
//                     title="Order"
//                     data-toggle="modal"
//                     data-target="#quickModel">
//                     Request
//                     </button>
//                           </div>
//                 <div className="overlay">
//                   <button
//                     type="button"
//                     className="btn btn-secondary"
//                     title="Order"
//                     data-toggle="modal"
//                     data-target="#quickModel"
//                   >
//                     <i className="fa fa-eye"></i>
//                   </button>

//                   <button
//                     type="button"
//                     className="btn btn-secondary"
//                     title="Add to Cart"
//                     data-toggle=""
//                     data-target=""
//                   >
//                     <i className="fa fa-shopping-cart"></i>
//                   </button>
//                 </div>
//               </div>
//               <div className="product-bottom text-center">
               
               
             
//               </div>
//             </div> 


//             <div className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated">
//               <div className="product-top">
//                 <img
//                   src="data:image/png;base64,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"
//                   className="img1"
//                   alt=""
//                 />
//              <div className="product-bottom text-center">
                            
//                             <h3>Supplier Name</h3>
//                             <h4>Address</h4>
                            
//                             <button     type="button"
//                     className="btn btn-secondary"
//                     title="Order"
//                     data-toggle="modal"
//                     data-target="#quickModel">
//                     Request
//                     </button>
//                           </div>
//                 <div className="overlay">
//                   <button
//                     type="button"
//                     className="btn btn-secondary"
//                     title="Order"
//                     data-toggle="modal"
//                     data-target="#quickModel"
//                   >
//                     <i className="fa fa-eye"></i>
//                   </button>

//                   <button
//                     type="button"
//                     className="btn btn-secondary"
//                     title="Add to Cart"
//                     data-toggle=""
//                     data-target=""
//                   >
//                     <i className="fa fa-shopping-cart"></i>
//                   </button>
//                 </div>
//               </div>
//               <div className="product-bottom text-center">
               
               
             
//               </div>
//             </div>


//             <div className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated">
//               <div className="product-top">
//                 <img
//                   src="data:image/png;base64,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"
//                   className="img1"
//                   alt=""
//                 />
//                <div className="product-bottom text-center">
                            
//                             <h3>Supplier Name</h3>
//                             <h4>Address</h4>
                            
//                             <button     type="button"
//                     className="btn btn-secondary"
//                     title="Order"
//                     data-toggle="modal"
//                     data-target="#quickModel">
//                     Request
//                     </button>
//                           </div>
//                 <div className="overlay">
//                   <button
//                     type="button"
//                     className="btn btn-secondary"
//                     title="Order"
//                     data-toggle="modal"
//                     data-target="#Order"
//                   >
//                     <i className="fa fa-eye"></i>
//                   </button>

//                   <button
//                     type="button"
//                     className="btn btn-secondary"
//                     title="Add to Cart"
//                     data-toggle=""
//                     data-target=""
//                   >
//                     <i className="fa fa-shopping-cart"></i>
//                   </button>
//                 </div>
//               </div>
//               <div className="product-bottom text-center">
               
               
             
//               </div>
//             </div>
//           </div>
//           <div
//             className="modal show product-view"
//             id="quickModel"
//             role="dialog"
//           >
//             <div className="modal-dialog">
//               <div className="modal-header">
//               <h3>Supplier Name</h3>
//                 <button type="button" className="close" data-dismiss="modal">
//                   &times;
//                 </button>
//               </div>
//               <div className="modal-dialog product-big-img">
//                  <div className="product-top">
//                 <img
//                   src="data:image/png;base64,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"
//                   className="img1"
//                   alt=""
//                 />
                 
                              
                
//                             <h4>Address</h4>
                            
//               <div className="product-bottom text-center">
            
                         
//                           </div>
                      
//                           <div class="container">
//                           <div className="container mt-5  ">
//         <div className="">
//           {/* <div className="jumbotron col-md-6 col-sm-5 " id="login-first"></div> */}
//           <div className="" id="login-second">
//             <div class="page-wrapper p-t-50 p-b-50">
//               <div class="wrapper ">
//                 <div class="card cardH card-6 ">
//                   <div class="card-heading">
//                     <h2 class="title text-dark ">&nbsp;&nbsp;&nbsp;&nbsp;Request Form</h2>
//                   </div>
//                   <div class="card-body  text-light">
//                     <form method="POST">
                     
//                       <div class="form-row1">
                       
//                        <div class="value">
//                          <div class="input-group">
//                            <input
//                              class="input--style-6"
//                              type="email"
//                              name="email"
//                              placeholder="full_name"
//                            />
//                          </div>
//                        </div>
//                      </div>
//                       <div class="form-row1">
                       
//                         <div class="value">
//                           <div class="input-group">
//                             <input
//                               class="input--style-6"
//                               type="email"
//                               name="email"
//                               placeholder="example@email.com"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                       <div class="form-row1">
                       
//                         <div class="value">
//                           <div class="input-group">
//                             <input
//                               class="input--style-6"
//                               type="email"
//                               name="email"
//                               placeholder="Password"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                       <div class="form-row1">
                       
//                         <div class="value">
//                           <div class="input-group">
//                             <input
//                               class="input--style-6"
//                               type="email"
//                               name="email"
//                               placeholder="Re-Password"
//                             />
//                           </div>
//                         </div>
//                       </div>
                      
//                     </form>
//                   </div>
//                   <div class="card-footer">
//                     <button class="btn btn--radius-2 btn-success" type="submit">
//                       Send Request
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
// </div>
// <div className="modal-header">
//               <h3>Brand Name</h3>
//                 <button type="button" className="close" data-dismiss="modal">
//                   &times;
//                 </button>
//               </div>
//               </div>
//                 <div className="overlay">
//                   <button
//                     type="button"
//                     className="btn btn-secondary"
//                     title="Order"
//                     data-toggle="modal"
//                     data-target="#Order"
//                   >
//                     <i className="fa fa-eye"></i>
//                   </button>

//                   <button
//                     type="button"
//                     className="btn btn-secondary"
//                     title="Add to Cart"
//                     data-toggle=""
//                     data-target=""
//                   >
//                     <i className="fa fa-shopping-cart"></i>
//                   </button>
//                 </div>
//               </div>
//               </div>
         
//             </div>
//           </div>
     
//         </section>

//       </Fragment>
//     );
//   }
// }

// export default SupplierList;
import React, { Component,useState, Fragment } from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import axios from "axios";
import {Redirect,Link} from 'react-router-dom'
import "../CSS/donor.css";

class PublicHome extends Component {
  state = {
    suppliers: [],
    supplier_id:"",
    view:false
  };
  componentDidMount = async () => {
    const token = sessionStorage.getItem("token");
    const config = {
      headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
    const res = await axios.get(`http://localhost:5000/api/v1/suppliers`, config);
      this.setState({
      suppliers: res.data.data,
    });
      console.log(this.state.scholerships);
  };
   
onClick = async (id,e) => {
 e.preventDefault();
 this.setState({
       view:true,
       supplier_id:id,
 });
}

render() {
 return (
    <Fragment>
    {this.state.view ?
    ( 
        (<Redirect view={this.state.view} 
          to={{pathname:'/ngo/view_supplier',
                  state:{supplier_id:this.state.supplier_id}
              }} 
          />) 
       )
    : 
    (
        
    <section class="counts section-bg mt-5">
        <div className=" container-fluid mt-5" id="product">
          <h2> List Of Foods</h2>

            <div className="row">
            {this.state.suppliers.map((supplier) => (
              <div className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated">
               <div className="card product-top">
                <img 
                  src={supplier.file}
                  className="img1"
                  alt=""
                />
                 <div className="product-bottom text-center">
               
            <h5 >{supplier.name}</h5>
            <h6>{supplier.phone}</h6>
            <h6 >{supplier.email}</h6>
             </div>
                <div className="overlay">
                  <a onClick={(e) =>this.onClick(supplier._id,e)}>
                    <i className="fa fa-eye"></i>
                  </a>
                </div>
              </div>
            
            </div>
            

            ))}
         
          
          </div>
        </div>
        </section>
      )}
      </Fragment>
    );
  }
}

export default PublicHome;
