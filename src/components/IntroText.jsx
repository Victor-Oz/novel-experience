function IntroText(){
    const names = ["baddie" , 'Kelly']
    const namelist = names.map(name => <li>{name}</li>)
    return(<div>
        <h2>um dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc</h2>
        <ul>{namelist}</ul>
        </div>
    )
}

export default IntroText