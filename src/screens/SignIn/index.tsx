import React from 'react';
import { 
	View, 
	Text, 
	TextInput,
	Image,
	StatusBar
} from 'react-native';
import { ButtonIcon } from '../../components/ButtonIcon';

import IllustrationImg from '../../assets/illustration.png';
import { styles } from './style';

export function SignIn(){

	return (
		<View style={styles.container}>
			<StatusBar 
				barStyle="light-content"
				backgroundColor="transparent"
				translucent
			/>
			<Image 
				source={IllustrationImg} 
				style={styles.image}
				resizeMode="stretch"
			/>
			<View style={styles.content}>
				<Text style={styles.title}>
					Conecte-se {`\n`}
					e organize suas {`\n`}
					jogatinas {`\n`}
				</Text>

				<Text style={styles.subtitle}>
					Crie grupos para jogar seus games {`\n`}
					favoritos com seus amigos
				</Text>

				<ButtonIcon 
					title='Entrar com o Discord' 
					activeOpacity={0.7}
				/>
			</View>
		</View>
	);
}
