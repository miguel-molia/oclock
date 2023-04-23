const alarmList = document.getElementById('alarm-list');
const addAlarmButton = document.getElementById('add-alarm');
const alarmTimeInput = document.getElementById('alarm-time');
const alarmTextInput = document.getElementById('alarm-text');

let alarms = [];

addAlarmButton.addEventListener('click', () => {
	const time = alarmTimeInput.value;
	const text = alarmTextInput.value;
	if (time && text) {
		const alarm = {
			time: time,
			text: text
		};
		alarms.push(alarm);
		addAlarmToList(alarm);
	}
});

function addAlarmToList(alarm) {
	const listItem = document.createElement('li');
	const now = new Date();
	const alarmTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), alarm.time.substring(0, 2), alarm.time.substring(3, 5), 0, 0);
	const timeDiff = alarmTime.getTime() - now.getTime();
	if (timeDiff < 0) {
		listItem.classList.add('passed');
	} else {
		const timeSpan = document.createElement('span');
		timeSpan.classList.add('time');
		timeSpan.textContent = `dans ${formatTimeDiff(timeDiff)}`;
		listItem.appendChild(timeSpan);
	}
	const textSpan = document.createElement('span');
	textSpan.textContent = ` - ${alarm.text}`;
	listItem.appendChild(textSpan);
	alarmList.appendChild(listItem);
}

function formatTimeDiff(timeDiff) {
	const seconds = Math.floor(timeDiff / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const remainingMinutes = minutes % 60;
	const remainingSeconds = seconds % 60;
	if (hours > 0) {
		return `${hours}h${remainingMinutes}m${remainingSeconds}s`;
	} else if (remainingMinutes > 0) {
		return `${remainingMinutes}m${remainingSeconds}s`;
	}

}