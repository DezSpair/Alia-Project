import { observer } from "mobx-react-lite";
import * as React from "react";
import { useRootStore } from "../../store/rootStore";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { SubNatures } from './SubNatures';

export const Natures = observer(() => {
    let selected = '' as string;
    const { character } = useRootStore();
    const handleRadioChange = (event: any) => {
        character.nature = event.target.value;
    };

    return (
        <div>
            <RadioGroup 
            row 
            name="row-radio-buttons-group"
            onChange={handleRadioChange}
            >
                <FormControlLabel value="Рассудительность" control={<Radio />} label="Рассудительность" />
                <FormControlLabel value="Импульсивность" control={<Radio />} label="Импульсивность" />
                <FormControlLabel value="Самоотверженность" control={<Radio />} label="Самоотверженность" />
                <FormControlLabel value="Эгоизм" control={<Radio />} label="Эгоизм" />        
            </RadioGroup>

            {character.nature != '' && <SubNatures />}
        </div>

    );
});