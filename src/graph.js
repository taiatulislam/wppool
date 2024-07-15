    // Utility functions for generating data
    const Utils = {
        months: function(config) {
          const cfg = config || {};
          const count = cfg.count || 12;
          const section = cfg.section;
          const values = [];
          const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
          for (let i = 0; i < count; ++i) {
            const value = months[Math.ceil(i) % 12];
            values.push(value.substring(0, section));
          }
          return values;
        },

        CHART_COLORS: {
          orange: 'rgb(252 113 77)',
          blue: 'rgb(97 93 227)',
          green: 'rgb(124 166 58)',
          violate: 'rgb(111 52 161)'

        },
      };

      const DATA_COUNT = 7;
      const NUMBER_CFG = { count: DATA_COUNT, min: -10, max: 100 };

      const labels = Utils.months({ count: 7 });
      const data = {
        labels: labels,
        datasets: [
          {
            label: 'WPPOOL',
            data: [10, 20, 20, 21, 40, 50, 70],
            borderColor: Utils.CHART_COLORS.orange,
            backgroundColor: Utils.CHART_COLORS.orange,
            yAxisID: 'y',
          },
          {
            label: 'Google',
            data: [40, 20, 25, 34, 45, 50, 90],
            borderColor: Utils.CHART_COLORS.blue,
            backgroundColor: Utils.CHART_COLORS.blue,
            yAxisID: 'y',
          },
          {
            label: 'Microsoft',
            data: [30, 12, 22, 39, 42, 20, 60],
            borderColor: Utils.CHART_COLORS.green,
            backgroundColor: Utils.CHART_COLORS.green,
            yAxisID: 'y',
          },
          {
            label: 'Twitter',
            data: [20, 10, 44, 52, 33, 27, 50],
            borderColor: Utils.CHART_COLORS.violate,
            backgroundColor: Utils.CHART_COLORS.violate,
            yAxisID: 'y',
          }
        ]
      };
      const config = {
        type: 'line',
        data: data,
        options: {
          responsive: true,
          interaction: {
            mode: 'index',
            intersect: false,
          },
          stacked: false,
          plugins: {
          },
          scales: {
            y: {
              type: 'linear',
              display: true,
              position: 'left',
            },
          }
        },
      };

      window.onload = function() {
        const ctx = document.getElementById('myChart').getContext('2d');
        new Chart(ctx, config);
      };