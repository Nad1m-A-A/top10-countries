import classes from '../assets/styles/Main.module.css'

function Footer() {
    return (
        <footer>
            <div className={classes.footer_container}>

                <div>
                    <h3>Know More:</h3>
                    <ul>
                        <li><a href='https://en.wikipedia.org/wiki/List_of_countries_by_total_wealth' target='_blank' rel="noreferrer">wealthy</a></li>
                        <li><a href='https://gazettereview.com/top-10-poorest-countries-world/' target='_blank' rel="noreferrer">poor</a></li>
                        <li><a href='https://gazettereview.com/top-10-most-intelligent-countries-in-the-world' target='_blank' rel="noreferrer">intelligent</a></li>
                        <li><a href='https://worldpopulationreview.com/country-rankings/crime-rate-by-country' target='_blank' rel="noreferrer">dangerous</a></li>
                        <li><a href='https://worldpopulationreview.com/country-rankings/countries-currently-at-war'  target='_blank' rel='noreferrer'>at war</a></li>
                        <li><a href='https://www.careeraddict.com/top-10-countries-with-the-highest-average-salaries' target='_blank' rel="noreferrer">high salary</a></li>
                    </ul>
                </div>

                <div className={classes.footer_div}>
                    <h3>Resources:</h3>
                    <ul>
                        <li>Image: <a href='https://www.pexels.com/photo/magnifying-glass-placed-on-maps-7412069/' target='_blank' rel="noreferrer">Monstera</a> </li>
                        <li>Symphony: <a href='https://www.youtube.com/watch?v=SY3Kxf7ZTeI' target='_blank' rel="noreferrer">Vivaldi</a> </li>
                        <li>API: <a href='https://restcountries.com/' target='_blank' rel="noreferrer">Rest Countries</a> </li>
                    </ul>
                </div>

                <div className={classes.footer_div}>
                    <h3>Developed by<br/> NADIM-A-A.</h3>
                    <a className={classes.site_link} href='https://github.com/Nad1m-A-A?tab=overview&from=2022-09-01&to=2022-09-30' target='_blank' rel="noreferrer">visit site</a>
                    <span>&copy; all rights reserves</span> 
                </div>

            </div>

        </footer>
    )
}

export default Footer