body {
  margin: 0;
  background: #1a1d22;
  color: #b6c0d6;
  font-family: 'Segoe UI', sans-serif;
}

.container {
  display: flex;
}

.sidebar {
  width: 220px;
  background: #181b20;
  min-height: 100vh;
  padding-top: 40px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  padding: 18px 24px;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  border-radius: 8px 0 0 8px;
  margin-bottom: 2px;
  transition: background 0.2s;
}

.sidebar li.active, .sidebar li:hover {
  background: #23272f;
  color: #59bfff;
}

.content {
  flex: 1;
  padding: 40px 60px;
}

h1 {
  text-align: center;
  color: #59bfff;
  font-size: 48px;
  margin: 0 0 28px 0;
}

.search-bar {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}

.search-bar input {
  background: #181b20;
  border: none;
  border-radius: 8px 0 0 8px;
  padding: 14px 18px;
  color: #b6c0d6;
  width: 320px;
  font-size
