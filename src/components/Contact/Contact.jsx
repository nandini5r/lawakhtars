import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import emailjs from 'emailjs-com';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Contact.scss';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const mapContainer = useRef(null);
  const mapRef = useRef(null); // Add a ref for the map instance

  useEffect(() => {
    // Check if the map is already initialized
    if (!mapRef.current) {
      // Initialize the map
      mapRef.current = L.map(mapContainer.current).setView([28.5880278, 77.2522500], 15);

      // Add OpenStreetMap tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(mapRef.current);

      const redMarker = L.marker([28.5880278, 77.2522500], {
        icon: new L.Icon({
          iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41],
        }),
      }).addTo(mapRef.current);

      redMarker.bindPopup('<b>AKHTARS LEGALITARIAN</b>').openPopup();
    }
  }, []);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .trim() // Remove leading and trailing spaces
      .required('Name is required')
      .min(2, 'Name must have at least two characters')
      .matches(/^\S.*\S$/, 'Leading or trailing spaces are not allowed'),
    phone: Yup.string()
      .required('Phone Number is required')
      .matches(/^[0-9]+$/, 'Invalid phone number (only digits allowed)').min(10),
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    message: Yup.string().required('Message is required').max(500, 'Message is too long'),
  });

  const form = useRef();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      emailjs
        .sendForm('service_hy3opmd', 'template_s8l24ao', form.current, 'Pcfs_4JdX7owkKLro')
        .then(
          (result) => {
        
            toast.success('Form submitted successfully!', {
              position: toast.POSITION.TOP_CENTER,
            });
            formik.resetForm();
          },
          (error) => {
            console.log(error.text);
          }
        );
    },
  });

  return (
    <div className='main'>
      <div className='bannerImg'>
        <h1>Contact Us</h1>
      </div>
      <div className='maps'>
      <div id='map' ref={mapContainer} style={{ width: '600px', height: '450px' }} />
    </div>
      <div className='account'>
        <div className='contact-info'>
          <div className='info'>
            <HomeIcon className='icon'/>
            <div>
              <h2>New Delhi ,India</h2>
              <p>C-31, LGF, Nizamuddin East, New Delhi-110013</p>
            </div>
          </div>
         
          <div className='info'>
              <PhoneIcon className='icon'/>
            <div>
              <h2>01141422406</h2>
              <h2>+91 9643885549</h2>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className='info'>
            <MailIcon className='icon' />
            <div>
              <h2>office@akhtarslegalitarian.com</h2>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
        <div className='contact-form'>
          <h2>Get in Touch</h2>
          <form onSubmit={formik.handleSubmit} ref={form}>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                name='name'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name && (
                <div className='error'>{formik.errors.name}</div>
              )}
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <div className='error'>{formik.errors.email}</div>
              )}
            </div>
            <div className='form-group'>
              <label htmlFor='phone'>Phone Number</label>
              <input
               
                id='phone'
                name='phone'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone && (
                <div className='error'>{formik.errors.phone}</div>
              )}
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Message</label>
              <textarea
                id='message'
                name='message'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              ></textarea>
              {formik.touched.message && formik.errors.message && (
                <div className='error'>{formik.errors.message}</div>
              )}
            </div>
            <div className='button'>
            <button type='submit'>Submit</button>
            </div>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
