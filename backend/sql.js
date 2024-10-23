import * as SQLite from 'expo-sqlite';

const db = await SQLite.openDatabaseAsync('db');

await db.execAsync(`
CREATE TABLE IF NOT EXISTS occurrences (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    group_id INT NOT NULL,
    occurred_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    reason TEXT,
    occurred BOOLEAN DEFAULT 0,
    options TEXT
);
CREATE INDEX idx_group_id ON occurrences (group_id);
CREATE INDEX idx_occurred_at ON occurrences (occurred_at);
`);

const doAsync = (fn) => (...p) => Promise.resolve(fn(...p))
    .then((res) => [res, null])
    .catch((err) => { console.error(err); return [null, err] });

const formatDate = (date) => date.toISOString().slice(0, 19).replace('T', ' ');

const _newOccurrence = async (group_id, reason, occurred, options) => {
    const result = await db.runAsync(`
    INSERT INTO occurrences (group_id, reason, occurred, options)
    VALUES (?, ?, ?, ?)`, group_id, reason, occurred, JSON.stringify(options)
    );
    return result.lastInsertRowId;
};

export const newOccurrence = doAsync(_newOccurrence);

const _getLastOccurrence = async (group_id) => await db.getFirstAsync(`
SELECT * FROM occurrences
${group_id ? 'WHERE group_id = ?' : ''}
ORDER BY occurred_at DESC`,
group_id
);

export const getLastOccurrence = doAsync(_getLastOccurrence);

export default db;