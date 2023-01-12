import * as React from "react";
import logo from "./logo.svg";
import styles from "./logo.module.scss";

interface LogoProps {}

/**
 * Icon
 */
export const Logo: React.FC<LogoProps> = () => {
	return (
		<div className={styles.logo}>
			<img src='assets/img/logo.svg' width='46' height='46' />
		</div>
	);
};
