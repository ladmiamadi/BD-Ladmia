import React from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";
import ErrorMess from './errorMess';

const Formulaire = () => {
   const initialValues={nom:'', prenom:'', dateNaissance:'', 
                  telephone:'', email:'', password:'', confirmation:'', accept:''}

                  const validationSchema=Yup.object({
                    nom: Yup.string().required('Le champs Nom doit étre renseigné!'),
                    prenom: Yup.string().required('Le champs Prénom doit étre renseigné!'),
                    dateNaissance: Yup.date().required('le champs Date de naissance doit étre rensigné!'),
                    telephone: Yup.number().required('Le champs Numéro de télephone doit étre rensigné!')
                    .min(10,'le numéro de téléphone doit comporter 10 chiffres!'),
                    email: Yup.string().required('Le champs Email doit étre renseigné!').email('cet email n\'est pas valide!').
                    matches(/^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z]+(?:.[a-zA-Z]+)$/,'cet email n\'est pas valide!'),
                    password: Yup.string().required('Le champs Mot de passe doit étre rensigné!').matches(

                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                        "Le mot de passe doit contenir 8 charactères, une majuscule, une minuscule, un nombre et un caractère spécial"
                      ),
                    confirmation: Yup.string().required('Merci de confirmer le mot de passe!')
                    .oneOf([Yup.ref("password"), null], "Les mots de passe doivent étres identiques"),
                    accept: Yup.boolean().required('Merci d\'accépter les conditions')

                      })
const onSubmit= values => {
                    
                    alert(JSON.stringify(values, null, 2))
                      }
return (
  <Formik initialValues={initialValues} 
          validationSchema={validationSchema} 
          onSubmit={onSubmit}>

       
        <div className="container border" style={{background:'#FFD8A6'}}>
        <h2 className="h2 mt-5 mx-3"style={{color:'#D92027'}}>Formulaire d'inscription</h2>            
                <Form className="mx-auto w-75 my-5">
                      <div className="container">
                        
                        <h5 className="h5 text-center mt-4 py-4"style={{color:'#007892'}}>Veuillez renseigner les champs ci-dessous:</h5>
                    </div>
                  <div className="form-group">
                        <label className="font-weight-bold" style={{color:'#007892'}} htmlFor="nom">Nom:</label>
                        <Field type="text" name='nom' id="nom" className="form-control shadow-lg"/>
                        <ErrorMessage name='nom' component={ErrorMess} className="invalid-feedback"/>
                  </div>
                  <div className="form-group">
                        <label className="font-weight-bold" style={{color:'#007892'}} htmlFor="prenom">Prénom:</label>
                        <Field className="form-control shadow-lg" type="text" name='prenom' id="prenom"/>
                        <ErrorMessage name='prenom' component={ErrorMess}/>

                  </div>
                  <div className="form-group">
                        <label className="font-weight-bold" style={{color:'#007892'}} htmlFor="dateNaissancd">Date de naissance:</label>
                        <Field className="form-control shadow-lg" type="date" name="dateNaissance" id="dateNaissance"/>
                        <ErrorMessage name='dateNaissance' component={ErrorMess}/>
                  </div>
                  <div className="form-group">
                        <label className="font-weight-bold" style={{color:'#007892'}} htmlFor="telephone">Numéro de tél:</label>
                        <Field className="form-control shadow-lg" type="text" name='telephone' id="telephone"/>
                        <ErrorMessage name='telephone' component={ErrorMess}/>
                  </div>
                  <div className="form-group">
                        <label className="font-weight-bold" style={{color:'#007892'}} htmlFor="email">Email:</label>
                        <Field className="form-control shadow-lg" type="email" name='email' id="email"/>
                        <ErrorMessage name='email' component={ErrorMess}/>
                  </div>
                  <div className="form-group">
                        <label className="font-weight-bold" style={{color:'#007892'}} htmlFor="password">Mot de passe:</label>
                        <Field className="form-control shadow-lg" type="password" name='password' id="password"/>
                        <ErrorMessage name='password' component={ErrorMess}/>
                  </div>
                  <div className="form-group">
                        <label className="font-weight-bold" style={{color:'#007892'}} htmlFor="password">Veuillez confirmer le mot de passe:</label>
                        <Field className="form-control shadow-lg" type="password" name='confirmation' id="confirmation"/>
                        <ErrorMessage name='confirmation' component={ErrorMess}/>
                  </div>
                  <div className="form-check">
                        <Field className="form-check-input shadow-lg" type="checkbox" name='accept' id="accept"/>
                        <label className="font-weight-bold" style={{color:'#007892'}} className="form-check-label" htmlFor="accept">Veuillez accépter les conditions</label>
                        <ErrorMessage name='accept' component={ErrorMess}/>   
                  </div>
                  <div className="form-group text-center">
                    
                    <button type="submit" className="btn btn-danger mt-4 py-2 px-4 shadow-lg" >Valider</button>
                  </div>

                </Form> 
            </div>
            </Formik>

)
}

export default Formulaire;