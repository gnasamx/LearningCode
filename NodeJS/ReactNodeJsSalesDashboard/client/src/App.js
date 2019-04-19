import React, { Component } from 'react'
import Button from './components/Button'
import Header from './components/Header'
import RecentTransactions from './components/RecentTransactions'
import SalesInfo from './components/SalesInfo'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mounted: false,
      transactions: null,
      localStorageObject: null,
      recentTransactions: [],
      totalSales: 0,
      startDate: new Date('2018-08-02'),
      endDate: new Date('2018-08-10'),
      isStartDate: false,
      isEndDate: false,
      avgRevenue: 0.0,
      uniqueCustomers: 0
    }
  }

  componentDidMount = () => {
    this.mounted = true
    fetch('http://localhost:8080/api/v1/csvtojson')
      .then(result => {
        return result.json()
      })
      .then(data => {
        this.setState({ transactions: data.transactions })
      })
  }

  onSearchClick = () => {
    let { transactions } = this.state
    // Filtering array according to Type === 'Payment Received"
    let filteredTransactionsArray = []
    if (transactions !== null) {
      transactions
        .filter(singleTransaction => {
          return singleTransaction.Type.includes('Payment Received')
        })
        .map(singleTransaction =>
          filteredTransactionsArray.push(singleTransaction)
        )
    }

    // Grouping filtered array based on date
    let groupedByDate = filteredTransactionsArray.reduce(function(
      groups,
      item
    ) {
      const val = item['Date']
      groups[val] = groups[val] || []
      groups[val].push(item)
      return groups
    },
    {})

    // Storing into local storage
    if (localStorage.getItem('sales') === null) {
      localStorage.setItem('sales', JSON.stringify(groupedByDate))
    }

    const salesFromLocalStorage = JSON.parse(localStorage.getItem('sales'))

    // 20 recent transaction from range
    if (salesFromLocalStorage) {
      let startDate = this.state.startDate
      let endDate = this.state.endDate
      const allTransactionsArray = []

      for (let key in salesFromLocalStorage) {
        var date = new Date(key)
        if (date >= startDate && date <= endDate) {
          let inRangedArray = salesFromLocalStorage[key]
          inRangedArray.map(iii => allTransactionsArray.push(iii))
        }
      }

      // Sorting in chronological order
      const sortedTransactions = allTransactionsArray.sort((a, b) => {
        return new Date(a.Date) + new Date(b.Date)
      })

      // Formating object
      const chronologicalSales = sortedTransactions.reverse()
      const requiredProperties = [
        'Date',
        'Time',
        'Name',
        'Gross',
        'FromEmailAddress',
        'Type'
      ]
      let formatedFinalSales = []
      chronologicalSales.map(cs => {
        let formatedSales = Object.keys(cs).reduce((object, key) => {
          if (requiredProperties.includes(key)) {
            object[key] = cs[key]
          }
          return object
        }, {})
        return formatedFinalSales.push(formatedSales)
      })

      this.setState({ recentTransactions: formatedFinalSales })

      // Total sale
      let totalSales = 0
      formatedFinalSales.map(
        ffs => (totalSales = totalSales + parseFloat(ffs.Gross))
      )
      this.setState({ totalSales: totalSales.toFixed(2) })

      // Avg revenue sales
      const avgRevenue = totalSales / formatedFinalSales.length
      this.setState({ avgRevenue: avgRevenue.toFixed(2) || 0 })

      // Unique customer
      let uniq = {}
      let uniqueCustomerArr = formatedFinalSales.filter(
        obj =>
          !uniq[obj.FromEmailAddress] && (uniq[obj.FromEmailAddress] = true)
      )
      this.setState({ uniqueCustomers: uniqueCustomerArr.length })
    }
  }

  handleStartDateChange = date => {
    if (date < this.state.endDate) {
      this.setState({
        startDate: date,
        isEndDate: false,
        isStartDate: false
      })
    } else {
      this.setState({
        startDate: this.state.endDate,
        isStartDate: true
      })
    }
  }

  handleEndDateChange = date => {
    if (this.state.startDate < date) {
      this.setState({
        endDate: date,
        isEndDate: false,
        isStartDate: false
      })
    } else {
      this.setState({
        endDate: this.state.startDate,
        isEndDate: true
      })
    }
  }

  render() {
    let {
      recentTransactions,
      startDate,
      endDate,
      totalSales,
      avgRevenue,
      uniqueCustomers,
      isStartDate,
      isEndDate
    } = this.state

    return (
      <div className="container">
        <div className="row m-5">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-4 text-center">
                    <Header
                      label="Start Date"
                      isDate={isStartDate}
                      date={startDate}
                      handleDateChange={this.handleStartDateChange}
                    />
                  </div>
                  <div className="col-4 text-center">
                    <Header
                      label="End Date"
                      isDate={isEndDate}
                      date={endDate}
                      handleDateChange={this.handleEndDateChange}
                    />
                  </div>
                  <div className="col-4 text-center">
                    <Button onSearchClick={this.onSearchClick} />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card mt-3">
                <div className="card-body">
                  <SalesInfo
                    totalSales={totalSales}
                    avgRevenue={avgRevenue}
                    uniqueCustomers={uniqueCustomers}
                  />
                </div>
              </div>
            </div>
            <div className="card mt-3">
              <div className="card-body">
                <RecentTransactions recentTransactions={recentTransactions} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  componentWillUnmount() {
    this.mounted = false
  }
}

export default App
