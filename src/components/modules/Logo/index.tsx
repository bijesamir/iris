import * as React from "react";
import {img} from "../../../assets/img";
import {Style} from "./Style"

interface LogoProps {}

export const Logo: React.FC<LogoProps> = () => {
	return (
		<Style>
			<img src={img.logo} width='46' height='46' />
		</Style>
	);
};
