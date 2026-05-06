---
slug: /Examples/Baseline-Examples/Baseline-Configuration-in-Thresholds
---

# Baseline Configuration in Thresholds

Baseline in thresholds allows dynamic comparison of current metric values against historical data patterns. It supports both simple time-shift comparison (e.g. yesterday vs today) and recurrent baselines based on daily or weekly patterns.


## Custom threshold metric

To enable baseline comparison, activate **Custom threshold metric**.  
This allows defining a specific data source, metric, and time range for the baseline calculation.

| Parameter | Description |
|------------|--------------|
| **Source** | Data stream used as a baseline reference (e.g. `netflowByIpAggr`). |
| **Direction** | Defines traffic direction: *Client*, *Server* or *Both*. |
| **Metric** | The measured value (e.g. `Sum Bytes`). |
| **Time range** | Defines the window of current data (e.g. *Last 15 minutes*). |


## Time shift

Specifies how far back the baseline should look.

- Typical setting: **1 day**
- Shifting by 1 day compares the current 15-minute window with the same 15-minute window from the previous day.
- **Time shift = 0** includes today’s data in baseline calculations, which may lead to inaccurate results.

> **Recommendation:** Always use **Time shift = 1 day** for daily and weekly recurrence to exclude ongoing data.


## Recurrent interval

When enabled, baseline is computed from multiple historical intervals (rolling baseline).

| Parameter | Description |
|----------|-------------|
| **Recurrent type** | **Daily** - compares the same hour/minute ranges from previous days.<br />**Weekly** - compares the same day of week (e.g. Monday to Monday). |
| **Start recurrence from** | Defines the historical window used for averaging, typically *Last 7 days*. |
| **Filter days** | Restricts comparison to: *Auto days*, *All days*, *Only working days*, *Only weekend days*. |


### Auto days

Automatically adjusts the baseline according to the current day type:

- If today is a working day, only working days from history are used.  
- If today is a weekend, only weekend data is used.  

This ensures comparable context between weekdays and weekends.


## Aggregation per category

Optional parameter for grouping baseline calculations by selected field (e.g. `per Country`).  
This allows independent baselines for each group, improving anomaly detection accuracy.

**Example:**  
Baseline of `Sum Bytes` can be calculated separately for each country, providing distinct thresholds per region.


## Example configuration

**Critical:**  
`Sum Bytes > avg(Source: netflowByIpAggr, Metric: Sum Bytes, Timerange: Last 15 minutes, Time shift: 1d)`  

**Baseline:**  
`Last 7 days, recurrent interval: Daily, Filter days: Auto, Aggregate per category: Country`

This setup compares the current 15-minute traffic volume to the average traffic observed in the same 15-minute window during the last seven corresponding weekdays or weekends.


## Best practices

| Scenario | Recommended settings | Notes |
|----------|----------------------|-------|
| **Daily comparison (standard)** | Recurrent type: *Daily*<br />Filter days: *Auto*<br />Time shift: *1 day*<br />Start recurrence: *Last 7 days* | Most common and stable configuration. Suitable for most production environments. |
| **Weekend/weekday differentiation** | Recurrent type: *Daily*<br />Filter days: *Auto* | Ensures weekend traffic is compared only to weekend data. |
| **Weekly trend detection** | Recurrent type: *Weekly*<br />Time shift: *1 day* | Useful when traffic strongly varies by weekday (e.g., Monday spikes). |
| **Short-term anomaly check** | No recurrent interval<br />Time shift: *1 day* | Lightweight comparison with minimal historical load. |
| **Granular baseline per group** | Aggregate per category: *Country*, *Interface*, or *Service* | Recommended for multi-tenant or geographically distributed networks. |


:::info
For high-volume datasets, limit recurrence range (e.g. 7-14 days) to optimize database performance.  
Increasing historical depth (up to 28 days) may improve baseline accuracy when traffic patterns are stable.
:::
