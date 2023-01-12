import styles from "./archivesearch.module.scss";

interface ArchiveSearchProps {}

/**
 * Icon
 */

export const ArchiveSearch: React.FC<ArchiveSearchProps> = () => {
	return (
		<section className={styles.archivesearch}>
			<header>
				<h2>Archive Search</h2>
				<div className='sectionInner'>
					<div className={styles.formrow}>
						<label>Select your AOI</label>
						<select>
							<option>Choose an option</option>
						</select>
					</div>
					<h3>Aquisition date</h3>
					<div className={styles.formrow}>
						<div className={styles.multiform}>
							<div className={styles.formEle}>
								<label>Start date</label>
								<div className={styles.calendar}>
									<input type='text' className={styles.startDate} />
									<img
										src='assets/img/calendar.svg'
										className={styles.calendaricon}
										width='13'
										height='13'
									/>
								</div>
							</div>
							<div className={styles.formEle}>
								<label>End date</label>
								<div className={styles.calendar}>
									<input type='text' className={styles.endDate} />
									<img
										src='assets/img/calendar.svg'
										className={styles.calendaricon}
										width='13'
										height='13'
									/>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.formrow}>
						<label>Imaging mode</label>
						<select className='formControl'>
							<option>Choose an option</option>
						</select>
					</div>
					<div className={styles.formrow}>
						<label>Product format</label>
						<select className='formControl'>
							<option>Choose an option</option>
						</select>
					</div>
					<div className={styles.formrow}>
						<h4 className='label'>Offnadir angle</h4>
						<div className={styles.multiform}>
							<div className={styles.formEle}>
								<select className='formControl'>
									<option>15°</option>
								</select>
							</div>
							<div className={styles.midDivider}>-</div>
							<div className={styles.formEle}>
								<select className='formControl'>
									<option>15°</option>
								</select>
							</div>
						</div>
					</div>
					<div className={styles.formrow}>
						<div className={styles.multiform}>
							<div className={styles.formEle}>
								<label>Looking direction</label>
								<select className='formControl'>
									<option>Both</option>
								</select>
							</div>
							<div className={styles.midDivider}></div>
							<div className={styles.formEle}>
								<label>Fight direction</label>
								<select className='formControl'>
									<option>Both</option>
								</select>
							</div>
						</div>
					</div>
					<div className={styles.formrow}>
						<button className={styles.submit} type='button'>
							Search
						</button>
					</div>
				</div>
			</header>
		</section>
	);
};
