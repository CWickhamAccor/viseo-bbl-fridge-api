# viseo-bbl-fridge-api
Fridge API Repo for the Viseo BBL Demo

## Usage

### Setup
```
npm install -g pm2
bash start.sh
```

### *[GET]* /flavour
```
{
	available: [
	    'chocolate',
	    'vanilla',
	    'strawberry',
	    'lemon',
	],
	promotion: [
	    'chocolate',
	],
}
```

### *[GET]* /flavour/chocolate
```
{
	available: true,
	promotion: true,
}
```
