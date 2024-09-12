const ProductDetail = (data) => {
	console.log(data);
	return /*html*/ `
  <div>
    <h1>Chi tiet san pham!<h1>
    <table class="table table-bordered table-striped">
     <thead>
       <tr>
         <td>ID</td>
         <td>Name</td>
         <td>Price</td>
         <td>Image</td>
         <td>Desc</td>
           <td>Action</td>
       </tr>
     </thead>
     <tbody>
       <tr>
         <td>${item.id}</td>
         <td>${item.title}</td>
         <td>${item.price}</td>
         <td><img src="${item.thumbnail}" /></td>
         <td>${item.description}</td>
         <td>
           <button class="btn btn-danger">Delete</button>${" "}
           <button class="btn btn-danger">Delete</button>
         </td>
       </tr>
     </tbody>
    </table>
  </div>
`;
};

export default ProductDetail;
