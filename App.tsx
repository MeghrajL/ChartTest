/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import PureChart from 'react-native-pure-chart';
import {LineChart} from 'react-native-chart-kit';
import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App(): JSX.Element {
  let sampleData = [30, 500, 170, 250, 10, 20, 20, 20, 202, 20];

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={
          {
            // flex: 1,
            // justifyContent: 'center',
            // alignItems: 'center',
            // width: 200,
            // margin: 30,
          }
        }>
        {/* <PureChart
          width={'100%'}
          height={200}
          data={sampleData}
          type="line"
          xAxisGridLineColor={'#d4d5da'}
          yAxisGridLineColor={'black'}
          yAxisColor={'#d4d5da'}
          xAxisColor={'#d4d5da'}
          backgroundColor={'red'}
        /> */}
        <PureChart
          data={sampleData}
          type="line"
          backgroundColor={'#fff'}
          height={230}
          showEvenNumberXaxisLabel={false}
          showEvenNumberYaxisLabel={true}
          yAxisColor={'#d4d5da'}
          xAxisColor={'#d4d5da'}
          yAxisLegentLabel={'Cognitive Efficiency in %'}
          yAxisLegentLabelright={'Accuracy in %'}
          gap={14}
          graphSlot={14}
          xAxisGridLineColor={'#d4d5da'}
          yAxisGridLineColor={'black'}
          // reLoadData={reLoadData}
          // scrollState={scrollState}
          // isDataChanges={isDataChanges}
          // calculateDate={calculateDate}
          // setInitialDate={setInitialDate}
          // limit={limit}
          // checkbox={checkbox}
        />
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
            legend: ['wkewinwe'],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
          // xAxisLabel="HIIIi"
          xLabelsOffset={2}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
