import Button from "./Button"

const HeaderBar = () => {
    return (
        <div>
            <div className="header-bar">
                <input className="header-bar-search" type="text" placeholder="Search a stock" />
                <RightMenu />
            </div>
        </div>
    )
}

//expanding searchbar form an icon on click
//add shadow down

const SearchBar = () => {


}

const RightMenu = () => {
    return (
         <div className="right-button-group">
         <Button text="Home" className="right-menu-button" textfmt="button-fmt"/> 
         <Button text="Notifications" className="right-menu-button" textfmt="button-fmt"/> 
         <Button text="Account" className="right-menu-button" textfmt="button-fmt"/>
         </div>
    )
}

export default HeaderBar;