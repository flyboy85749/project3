import React from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Newproperty = () => {
    return (
        <Formik
            intialValues={{ unit_no: '', bedrooms: '', baths: '', sqft: '', occupied: '', date_available: '', rent: '' }}
            validationSchema={Yup.object({
                unit_no: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                bedrooms: Yup.string()
                    .max(20, 'Must be 20 characters of less')
                    .required('Required'),
                baths: Yup.string()
                    .max(20, 'Must be 20 characters of less')
                    .required('Required'),
                sqft: Yup.string()
                    .max(20, 'Must be 20 characters of less')
                    .required('Required'),
                occupied: Yup.string()
                    .max(20, 'Must be 20 characters of less')
                    .required('Required'),
                date_available: Yup.string()
                    .max(20, 'Must be 20 characters of less')
                    .required('Required'),
                rent: Yup.string()
                    .max(20, 'Must be 20 characters of less')
                    .required('Required')
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            <Form>
        <h2>Add Property</h2>
        <div className="field">
          <label htmlFor="unit_no" className="label">Unit Number</label>
          <div className="control">
            <Field name="unit_no" className="input" type="text" placeholder="Unit Number?" />
            <ErrorMessage name="unit_no" />
          </div>
        </div>
      
        <div className="field">
          <label htmlFor="bedrooms" className="label">Bedrooms</label>
          <div className="control">
            <Field name="bedrooms" className="input" type="text" placeholder="How Many Bedrooms?" />
            <ErrorMessage name="bedrooms" />
          </div>
        </div>
       
        <div className="field">
          <label htmlFor="baths" className="label">Baths</label>
          <div className="control">
            <Field name="baths" className="input" type="text" placeholder="How Many Baths?" />
            <ErrorMessage name="baths" />
          </div>
        </div>
        
        <div className="field">
          <label htmlFor="sqft" className="label">Square Footage</label>
          <div className="control">
            <Field name="sqft" className="input" type="text" placeholder="How Large is Unit?" />
            <ErrorMessage name="sqft" />
          </div>
        </div>
    
        <div className="field">
          <label htmlFor="occupied" className="label">Occupied</label>
          <div className="control">
            <Field name="occupied" className="input" type="checkbox" placeholder="Occupied?" />
            <ErrorMessage name="occupied" />
          </div>
        </div>
        
        <div className="field">
          <label htmlFor="rent_last_paid" className="label">Rent Last Paid</label>
          <div className="control">
            <Field name="rent_last_paid" className="input" type="text" placeholder="Rent Last Paid?" />
            <ErrorMessage name="rent_last_paid" />
          </div>
        </div>
        
        <div className="field">
          <label htmlFor="rent_status" className="label">Rent Status</label>
          <div className="control">
            <Field name="rent_status" className="input" type="text" placeholder="Rent Status" />
            <ErrorMessage name="rent_status" />
          </div>
        </div>
        
        <div className="field">
          <label htmlFor="issues" className="label">Issues</label>
          <div className="control">
            <Field name="issues" className="input" type="textarea" placeholder="Issues" />
            <ErrorMessage name="issues" />
          </div>
        </div>
        
        <div className="field">
          <label htmlFor="mgr_comments" className="label">Manager Comments</label>
          <div className="control">
            <Field name="mgr_comments" className="input" type="text" placeholder="Manager Comments" />
            <ErrorMessage name="mgr_comments" />
          </div>
        </div>
        

        <button type="submit">Submit</button>
      </Form>
        </Formik>
    );
};

export default Newproperty;





















