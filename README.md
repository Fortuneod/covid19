# covid19
Simple CLI Program to track COVID-19 Info

<h4 align="center">
    <a href="https://github.com/Fortuneod/covid19-cli">
        <img src="./.github/logo.jpg" alt="covid19-cli" />
    </a>
    <br>
    <br>
  
 
- 🚀 Get worldwide Coronavirus disease (COVID-19) reporting
- 🤯 Active daily reporting of your country's COVID-19 statistics
- 🇺🇸 Get US States data for Coronavirus disease reports across the US
- 🗃️ Data: Country, Cases, Deaths, Recovered, Active, Critical, Per Million
- 📟 Sort: `cases`,`cases-today`,`deaths`,`deaths-today`,`recovered`,`active`,`critical`,`per-million`

## Install

```sh
# Install globally (recommended).
npm install -g covid19-cli

## Usage

### All Countries

```sh
# Display data for all countries.
corona

# Display data for all countries in single color.
corona --xcolor

# Alias: Display data for all countries in single color.
corona -x
```

[![📟](./.github/corona.gif)](./../../)

### Single Country

```sh
# Display data for given country.
corona <countryName>

# Display data for given country i.e. China.
corona china

# Display data for given country i.e. USA.
corona usa
```


### US States Data

```sh
# Display data for all the US states.
corona states

# Display states data sorted by active cases.
corona states --sort active

# Display states data sorted by Cases today.
corona states -s cases-today
```

### Sort Data

```sh
# Sort data by type
corona --sort country
corona --s cases

# All sorting parameters.
corona -s country
corona -s cases
corona -s cases-today
corona -s deaths
corona -s deaths-today
corona -s recovered
corona -s active
corona -s critical
corona -s per-million
```
