import provinces from '../../utils/provinces'
import cities from '../../utils/cities'
import areas from '../../utils/areas'
import hkmotw from '../../utils/HK-MO-TW'

areas.forEach((area) => {
    const matchCity = cities.filter(city => city.code === area.cityCode)[0];
    if (matchCity) {
        matchCity.children = matchCity.children || [];
        matchCity.children.push({
            label: area.name,
            value: area.code,
        });
    }
});

cities.forEach((city) => {
    const matchProvince = provinces.filter(province => province.code === city.provinceCode)[0];
    if (matchProvince) {
        matchProvince.children = matchProvince.children || [];
        matchProvince.children.push({
            label: city.name,
            value: city.code,
            children: city.children,
        });
    }
});

const _hkmotw = Object.entries(hkmotw).map(([provinceName, provinceItem]) => {
    return {
        label: provinceName,
        value: (Math.random() * 1e10).toFixed(),
        children: Object.entries(provinceItem).map(([cityName, cityItem]) => {
            return {
                label: cityName,
                value: (Math.random() * 1e10).toFixed(),
                children: cityItem.map(area => {
                    return {
                        label: area,
                        value: (Math.random() * 1e10).toFixed()
                    }
                })
            }
        })
    }
})

let options = provinces.map(province => ({
    label: province.name,
    value: province.code,
    children: province.children,
}));

options = options.concat(_hkmotw)

export default options;
