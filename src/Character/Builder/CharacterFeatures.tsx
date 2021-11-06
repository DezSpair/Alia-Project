import { observer } from "mobx-react-lite";
import * as React from "react";
import { useRootStore } from "../../store/rootStore";
import { CharacterFeature } from "../../store/types"
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

const data = [
    {
        title: "Мучитель",
        description: "может извлекать в два раза больше ЖС из живых существ на каждый затрачиваемый ПВ, либо успех на кости."
    }, {
        title: "Несгибаемость",
        description: "при похищении ЖС  теряется только их половина с округлением вниз. Персонажа с этой особенностью нельзя убить при помощи похищения ЖС. В случае, если при похищении он должен расстаться с последними ЖС, то похищения не происходит."
    }, {
        title: "Магическая батарейка",
        description: "некоторые линийцы рождаются с даром запасать в себе жизненную энергию. Они учатся запасать в себе излишки ПВ, поглощенные при помощи вытягивания ЖС или переданные им магическим путем (при этом для магов они становятся столь же притягательны, как  лампочка для мотыльков). Накопленной энергией они могут перезаряжать магические камни, а также излишки ПВ могут быть использованы для уменьшения иссушения, либо для лечения себя (пропорционально кости иссушения)."

    }, {
        title: "Устойчивость генных мутаций",
        description: "гены персонажа устойчивы к мутациям, то требует на 1 ПВ больше для совершения генных преобразований, а также снижает вероятность появления негативных мутаций на 25%."
    }, {
        title: "Улучшенная инициатива",
        description: "персонаж поднимает на 2 ПВ свою инициативу.",
        initiative: 2
    }, {
        title: "Неутомимый",
        description: "персонаж при подсчете штрафа на действия игнорирует один ранг негативных эффектов, требующих отдыха."
    }, {
        title: "Талант псионика",
        description: "открывает персонажу доступ к магическим умениям.",
        talent: "псионика"
    }, {
        title: "Талант сомноника",
        description: "открывает персонажу доступ к умениям сомноника.",
        talent: "сомноника"
    }, {
        title: "Талант некроника",
        description: "открывает персонажу доступ к умениям некроники.",
        talent: "некроника"
    }, {
        title: "Идеальные гены",
        description: "персонаж не получает недостатков, связанных со снижением характеристик, при создании персонажа."
    }
] as CharacterFeature [];

export const CharacterFeatures = observer(() => {
    const { character } = useRootStore();
    const handleChange = (event: any) => {
        const item = data.find(i => i.title == event.target.value);
        if(event.target.checked) {
            character.addCharacterFeature(item as CharacterFeature);
        } else {
            character.deleteCharacterFeature(item as CharacterFeature);
        }
    }
    
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            {
                data.map((item, index) => {
                    const itemIndex = character.characterFeatures.findIndex(i => i.title == item.title);
                    return (
                        <Card key={"characterFeatures_key_" + index} sx={{ display: 'flex', width: 400, height: 400 }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        {item.description}
                                    </Typography>
                                </CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'left', pl: 1, pb: 1 }}>
                                    <Checkbox 
                                        value={item.title} 
                                        checked={itemIndex > -1} 
                                        disabled={character.characterFeatures.length >= 2 && itemIndex == -1}
                                        onChange={handleChange}
                                        />
                                </Box>
                            </Box>
                        </Card>
                    );
                })
            }
        </Box>
    );
});