# 📦 Module 3 – Lesson 09: JSON for Beginners

## 🧠 What is JSON?

**JSON** stands for **JavaScript Object Notation**.  
It is a lightweight, text-based format for **storing** and **exchanging** data. JSON is easy to read and write for humans, and easy to parse and generate for machines.

---

## 🧾 Why is JSON Important?

- It's the **standard format for APIs** on the web.
- Used by **JavaScript, Python, Java, Ruby, PHP**, and more.
- Works seamlessly with modern databases (e.g., MongoDB, Firebase).
- Helps structure data to **send between frontend and backend**.

---

## 🧱 JSON Structure

### ✅ JSON is made up of:

1. **Objects** (key-value pairs, similar to JS objects):
```json
{
  "name": "Alice",
  "age": 30,
  "isAdmin": false
}
```

2. **Arrays** (ordered lists of values):
```json
["JavaScript", "Python", "Ruby"]
```

3. **Values** (string, number, object, array, boolean, or null)

---

## 🔄 JSON vs JavaScript Objects

| Feature            | JSON                          | JavaScript Object              |
|-------------------|-------------------------------|-------------------------------|
| Keys              | Must be in **double quotes**  | Can be unquoted               |
| Strings           | Must be in **double quotes**  | Can be in single/double quotes |
| Functions         | ❌ Not allowed                 | ✅ Allowed                     |
| Comments          | ❌ Not allowed                 | ✅ Allowed                     |

---

## 🧪 Common Methods

### 🔹 JSON.stringify()
Converts a JS object to a JSON string:
```js
const obj = { name: "Alice" };
const json = JSON.stringify(obj);
// '{"name":"Alice"}'
```

### 🔹 JSON.parse()
Converts a JSON string to a JS object:
```js
const str = '{"name":"Alice"}';
const obj = JSON.parse(str);
// { name: "Alice" }
```

---

## ⚠️ Rules and Limitations

- Only data allowed: **string, number, object, array, boolean, null**
- No comments, no functions, no undefined
- Always use **double quotes** for keys and strings

---

## 🌍 Real-World Use Cases

- API responses (`fetch`, `axios`)
- Config files (e.g., `package.json`)
- Persisting data (localStorage, databases)
- Data interchange between systems

---

## 💡 Summary

- JSON is a universal data format.
- Use `JSON.stringify()` to convert to JSON.
- Use `JSON.parse()` to read JSON data.
- JSON must follow strict syntax rules.