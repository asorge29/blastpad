import styles from "@/styles/Popup.module.css";
import {useEffect, useState} from "react";

const updatePanelColors = (e, panelColors, setPanelColors) => {
    const id = e.target.id;
    let value;
    const updatedPanelColors = {
        ...panelColors,
        [id]: value,
    };
}

const updateSettings = (e, settings, setSettings) => {
    const id = e.target.id;
    const value = e.target.value;
    const updatedSettings = {
        ...settings,
        [id]: value,
    };
    setSettings(updatedSettings);
};

export default function SettingsMenu({panelColors, setPanelColors, closeMethod, applyMethod, setSettings, settings}) {
    return (
        <div className={styles.fullscreen}>
            <div className={styles.popup}>
                <button onClick={closeMethod} className={styles.close}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                <form className={styles.form} onSubmit={(e) => updateSettings(e, settings, setSettings)}>
                    <h2>Settings</h2>
                    <div>
                        <label htmlFor="favoritesColor">Favorites Color: </label>
                        <input className={styles.colorInput} type="color" id="favoritesColor" name="favoritesColor"
                               defaultValue={settings.favoritesColor}></input>
                    </div>
                    <div>
                        <label htmlFor="emailColor">Email Color: </label>
                        <input className={styles.colorInput} id="emailsColor" name="emailsColor" type="color"
                               defaultValue={settings.emailsColor}></input>
                    </div>
                    <div>
                        <label htmlFor="toDoColor">To-Do Color: </label>
                        <input className={styles.colorInput} id="todoColor" name="todoColor" type="color"
                               defaultValue={settings.todoColor}></input>
                    </div>
                    <div>
                        <label htmlFor="notesColor">Notes Color: </label>
                        <input className={styles.colorInput} id="notesColor" name="notesColor" type="color"
                               defaultValue={settings.notesColor}></input>
                    </div>
                    <div>
                        <button>Apply</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
