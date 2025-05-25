import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Container,
  Paper
} from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const NetflixFAQ = () => {
  const [expanded, setExpanded] = useState('');

  const faqData = [
    {
      id: 'panel0',
      question: 'What is Netflix?',
      answer: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.\n\nYou can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There\'s always something new to discover, and new TV shows and movies are added every week!'
    },
    {
      id: 'panel1',
      question: 'How much does Netflix cost?',
      answer: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $6.99 to $22.99 a month. No extra costs, no contracts.'
    },
    {
      id: 'panel2',
      question: 'Where can I watch?',
      answer: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.\n\nYou can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you\'re on the go and without an internet connection. Take Netflix with you anywhere.'
    },
    {
      id: 'panel3',
      question: 'How do I cancel?',
      answer: 'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
    },
    {
      id: 'panel4',
      question: 'What can I watch on Netflix?',
      answer: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'
    },
    {
      id: 'panel5',
      question: 'Is Netflix good for kids?',
      answer: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.\n\nKids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don\'t want kids to see.'
    }
  ];

 const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className='pt-5 w-full flex flex-col gap-20 bg-black ' >
      <div className='w-10/12 mx-auto flex flex-col gap-2 '>
        <h2 className=' text-white font-bold text-2xl ' >Frequently Asked Questions</h2>

          <div className='mt-4' >

          {faqData.map((faq) => (

            <div key={faq.id} className=' '   >


            
              <Accordion
                expanded={expanded === faq.id}
                onChange={handleChange(faq.id)}
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.25)',
                  transition: 'background-color 0.3s ease',
                  borderBottom: '0.5em solid #000',
                  cursor: 'pointer',

                  boxShadow: 'none',
                  '&:before': {
                    display: 'none',
                  },
                  '&.Mui-expanded': {
                    margin: 0,
                  }
                }}
                >
                <AccordionSummary
                  expandIcon={
                    expanded === faq.id ? (
                      <Remove sx={{ color: 'white', fontSize: '2rem' }} />
                    ) : (
                      <Add sx={{ color: 'white', fontSize: '2rem' }} />
                    )
                  }
                  sx={{
                    backgroundColor: '#2d2d2d',
                    minHeight: '75px',
                    px: 3,
                    '& .MuiAccordionSummary-content': {
                      margin: '20px 0',
                    },
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      cursor: 'pointer'
                    }
                  }}
                  >
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'white',
                      fontWeight: 400,
                      fontSize: { xs: '1.1rem', md: '1.5rem' },
                      lineHeight: 1.2,
                      
                    }}
                    >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    backgroundColor: '#2d2d2d',
                    px: 3,
                    pb: 3,
                    borderTop: '1px solid #333'
                  }}
                  >
                  <Typography
                    sx={{
                      color: 'white',
                      fontSize: { xs: '1rem', md: '1.25rem' },
                      lineHeight: 1.5,
                      whiteSpace: 'pre-line'
                    }}
                    >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>

            </div>
            
          ))}
       </div>

        
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography
            variant="h6"
            sx={{
              color: 'white',
              mb: 2,
              fontSize: { xs: '1rem', md: '1.25rem' }
            }}
            >
            Ready to watch? Enter your email to create or restart your membership.
          </Typography>
        </Box>

         </div>

    
      </div>
  );
};

export default NetflixFAQ;