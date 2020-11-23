import React, { Component } from 'react';
import axios from 'axios';



class Usuarios extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
       dataUsuario: [],
       formInsertar: false,
       form: {
        id: '',
        name: '',
        age: '',
        perfil: '',
       }

    };
   }

peticionGet=()=>{
 axios.get('http://localhost:3004/usuario')
 .then(res=>{
    console.log(res.data)
   this.setState({
      dataUsuario: res.data
   })
 }).catch(error=>{
   console.log(error.message)
})
}

peticionPost=async()=>{
  delete this.state.form.id;
  await axios.post('http://localhost:3004/usuario', this.state.form)
  .then(res=>{
    this.formularioInsertar();
    this.peticionGet(); 
  }).catch(error=>{
    console.log(error.message) 
 })
 }



formularioInsertar= ()=>{
 this.setState({  
   formInsertar: !this.state.formInsertar
 })
}


handleChange=async(e)=>{
  e.persist();
  await this.setState({
    form:{
      ...this.state.form,
     [e.target.name]: e.target.value
    }
  })


console.log(this.state.form)
 }


   componentDidMount (){
     this.peticionGet();
   }


  render () {
    console.log(this.state.datausuario);
    console.log(this.props.numero);
    const datosForm = this.state.form
  

    return(
      <div className="container">
      <h1 className="text-center text-primary mt-5">Teachart</h1>
      <button className="btn btn-primary justify-content-center"  onClick={()=>{this.formularioInsertar()}}>registrar usuario</button>
       <div className="row">
         <div className="col-md-6 col-12 col-sm-12 mt-5 ">
         <h2 className="text-center text-primary">usuarios</h2>
          <div className="mt-4">
          <ul>
              {this.state.dataUsuario.map((usuario)=>{
                return(
                  <>
                  <li className="mb-5" key={`pet-${usuario}`} >
                      <p>ID: {usuario.id}</p>
                      <p>Nombre: {usuario.name}</p>
                      <p>Edad: {usuario.age}</p>
                      <p>Perfil: {usuario.type}</p>
                      <button className="btn btn-primary" >Editar</button>
                       {"   "}
                      <button className="btn btn-danger"  >Eliminar</button>
                  </li>

                  </>
                )
              })}
                      
            </ul>
          </div>
        </div>
<div className="col-md-6 col-12 col-sm-12 mt-5">
  <form className="needs-validation mt-4" >
    <h3 className="text-center pb-3 text-primary">Formato de Registro</h3>
    <div className="mx-auto">
      <label htmlFor="ID">ID: <span className="obligate text-primary">*</span></label>
      <input type="text" className="form-control mb-2"  required=""  name="id" id="id" onChange={this.handleChange} value={this.state.dataUsuario.length+1}
        />
      <label htmlFor="Name">Nombre: <span className="obligate text-primary">*</span></label>
      <input type="text" className="form-control mb-2" id="name"  required=""  name="name" onChange={this.handleChange} value={datosForm.name}
        />
  
      <label htmlFor="Age">Edad:<span className="obligate text-primary">*</span></label>
      <input type="text" className="form-control mb-2"  required=""  name="age" id="age" onChange={this.handleChange} value={datosForm.age}
         />
     
      <label htmlFor="Type">Perfil:<span className="obligate text-primary">*</span></label>
      <input type="text" className="form-control mb-2"  required=""  name="type" id="type" onChange={this.handleChange} value={datosForm.type}
         />
     
      
    </div>

    
             <button className="btn btn-primary btn-s btn-block mx-auto col-4 mt-4 mb-5" onClick={()=>this.peticionPost()}>
              Guardar</button>

    

  </form>
</div>

      </div>
  </div>
    )
  }
}



export default Usuarios;