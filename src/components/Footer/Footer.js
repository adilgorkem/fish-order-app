import React from 'react'
import Card from '../UI/Card'
import classes from './Footer.module.css'
import GitHubIcon from './GitHubIcon'
import LinkedInIcon from './LinkedInIcon'
import SlideShow from '../UI/SlideShow'

export default function Footer() {

    const link = '';

    return (
        <Card className={classes.footer}>
            <div className={classes['social-media']}>
                <h1>Fish Pot</h1>
                <p><a href='mailto:adil.gorkem.gedik@gmail.com'>adil.gorkem.gedik@gmail.com</a></p>
                <div className={classes.icons}>
                    <a href='https://github.com/adilgorkem' target='_blank' rel='noreferrer' title='GitHub Profile'><GitHubIcon /></a>
                    <a href='https://www.linkedin.com/in/adilgorkemgedik/' target='_blank' rel='noreferrer' title='LinkedIn Profile'><LinkedInIcon /></a>
                </div>
            </div>
            <div className={classes.address}>
                <h2>Location</h2>
                <p>Beşiktaş</p>
                <p>Kadıköy</p>
            </div>
            <div className={classes.company}>
                <h2>Company</h2>
                <span><a href={link}>About</a></span>
                <span><a href={link}>Privacy Policy</a></span>
                <span><a href={link}>Terms of Service</a></span>
            </div>
            <SlideShow className={classes.slideshoww}/>
        </Card>
    )
}
