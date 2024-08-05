import * as busRepository from '../data/bus.js';

export async function getAllbyGu(req, res, next) {
    const region = req.params.region;
    try {
        const buses = await busRepository.getAllbyGu(region);
        res.json(buses);
    } catch (error) {
        next(error);
    }
}