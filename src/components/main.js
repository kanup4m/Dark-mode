import React, { useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LocalContext } from './Context'
const Main = () => {
    const { toggleTheme, color, theme } = useContext(LocalContext)
    const { light, dark } = color
    const mode = theme ? light : dark
    console.log(theme, mode)
    return (
        <div className="app" style={{ backgroundColor: mode.bg }}>
            <div className="level">
                <div>
                    <h1 className="title" style={{ color: mode.title }}>Dark Mode Challenge</h1>
                </div>

                {/* --The button that should toggle dark mode-- */}
                <button className="app__dark-mode-btn icon level-right" onClick={toggleTheme}>
                    <FontAwesomeIcon icon={mode.icon} color={mode.iconColor} />
                </button>

            </div>

            <div className="columns" style={{ color: mode.text }}>
                <div className="column">
                    <p>Lollipop powder powder. Cotton candy caramels chupa chups halvah muffin caramels apple pie topping cake. Topping chocolate bar pastry chocolate cake. Cupcake tart jujubes dragée jelly-o icing sugar plum. Chocolate bar lollipop candy canes. Biscuit croissant apple pie pudding caramels wafer tart tootsie roll macaroon. Croissant tiramisu chocolate bar carrot cake lemon drops halvah.</p>
                </div>
                <div className="column">
                    <p>Marshmallow tiramisu liquorice bear claw chocolate bar bear claw tart. Muffin chupa chups pie. Brownie apple pie topping lemon drops marzipan toffee. Pudding macaroon icing ice cream bonbon cake tart. Pudding sugar plum chocolate cake cake biscuit pastry pastry chocolate bar tart. Lemon drops dessert gummies icing.</p>
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <input className="input" type="text" placeholder="Name" style={{ backgroundColor: mode.input }} />
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <input className="input" type="text" placeholder="Email" style={{ backgroundColor: mode.input }} />
                </div>
            </div>

            <section className="section">
                <div className="buttons level-right">
                    <a className="button" style={{ backgroundColor: mode.btn1 }}>Save</a>
                    <a className="button " style={{ backgroundColor: mode.btn2 }}>Submit</a>
                </div>
            </section>
        </div>
    );
}

export default Main;