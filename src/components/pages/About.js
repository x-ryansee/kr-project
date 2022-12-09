function About() {

    return(
        <div className="about">
            <h5>About Us</h5>
            <h6>Welcome to StudyParty</h6>
            
            <p1 className="about-p1"><br></br>Welcome to the wonderful world of StudyParty streaming site. Where we curate the best of the best music made by music lovers and just for you! In StudyParty, we offer direct links to Study Music and Party Music for your mood and taste for your liking. So come along and discover your next hit song for your everyday needs.</p1>
            <p2>Created and Curated By Ryan See and Keith Ma</p2>

            <p3>
                <ul><strong>There are five main functionalities to this webpage:</strong>
<li>The user is able to see rendered DB.JSON information including a song name, song artist, and album cover.</li>
<li>When the user clicks on "Show Player", an embedded youtube link for that song will appear and have full functionality.</li>
<li>The user is able to search for songs by title in the search-bar, without being case sensitive.</li>
<li>The user is able to add new songs to the webpage through a form and have them appear in the same format.</li>
<li>There are usable Routes and Links.  If the user clicks on the "Study" or "Party" section on the header, it will direct them to view only the music meant for that activity.  If the user clicks on "Home" or "About", it will link them to the designated area.</li>
</ul>
   </p3>


        </div>
    )
}

export default About